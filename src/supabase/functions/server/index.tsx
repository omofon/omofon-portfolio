import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "jsr:@supabase/supabase-js";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Create Supabase client
const supabase = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
);

// Enable logger
app.use("*", logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  })
);

// Health check endpoint
app.get("/make-server-170e0f1f/health", (c) => {
  return c.json({ status: "ok" });
});

// Submit contact form
app.post("/make-server-170e0f1f/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return c.json({ error: "All fields are required" }, 400);
    }

    const timestamp = Date.now();
    const id = crypto.randomUUID();
    const key = `contact_submission_${timestamp}_${id}`;

    const submission = {
      id,
      name,
      email,
      message,
      timestamp,
      createdAt: new Date().toISOString(),
    };

    await kv.set(key, submission);

    return c.json({
      success: true,
      message: "Submission received successfully",
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return c.json({ error: "Failed to submit form" }, 500);
  }
});

// Admin signup
app.post("/make-server-170e0f1f/admin/signup", async (c) => {
  try {
    const body = await c.req.json();
    const { email, password, name } = body;

    if (!email || !password) {
      return c.json({ error: "Email and password are required" }, 400);
    }

    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name },
      // Automatically confirm the user's email since an email server hasn't been configured.
      email_confirm: true,
    });

    if (error) {
      console.error("Error creating admin user:", error);
      return c.json({ error: error.message }, 400);
    }

    return c.json({ success: true, user: data.user });
  } catch (error) {
    console.error("Error in admin signup:", error);
    return c.json({ error: "Failed to create admin account" }, 500);
  }
});

// Get all contact submissions (protected)
app.get("/make-server-170e0f1f/admin/submissions", async (c) => {
  try {
    const accessToken = c.req.header("Authorization")?.split(" ")[1];

    if (!accessToken) {
      return c.json({ error: "Unauthorized - No token provided" }, 401);
    }

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(accessToken);

    if (error || !user) {
      console.error("Auth error while fetching submissions:", error);
      return c.json({ error: "Unauthorized - Invalid token" }, 401);
    }

    const submissions = await kv.getByPrefix("contact_submission_");

    // Sort by timestamp (newest first)
    submissions.sort((a: any, b: any) => b.timestamp - a.timestamp);

    return c.json({ submissions });
  } catch (error) {
    console.error("Error fetching submissions:", error);
    return c.json({ error: "Failed to fetch submissions" }, 500);
  }
});

// Delete a contact submission (protected)
app.delete("/make-server-170e0f1f/admin/submissions/:id", async (c) => {
  try {
    const accessToken = c.req.header("Authorization")?.split(" ")[1];

    if (!accessToken) {
      return c.json({ error: "Unauthorized - No token provided" }, 401);
    }

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(accessToken);

    if (error || !user) {
      console.error("Auth error while deleting submission:", error);
      return c.json({ error: "Unauthorized - Invalid token" }, 401);
    }

    const id = c.req.param("id");
    const submissions = await kv.getByPrefix("contact_submission_");

    const submission = submissions.find((s: any) => s.id === id);

    if (!submission) {
      return c.json({ error: "Submission not found" }, 404);
    }

    // Find the key for this submission
    const allKeys = await kv.getByPrefix("contact_submission_");
    const matchingKey = allKeys.find((item: any) => item.id === id);

    if (matchingKey) {
      // Extract the actual key from the stored data structure
      const keys = await kv.getByPrefix(
        `contact_submission_${submission.timestamp}_${id}`
      );
      if (keys.length > 0) {
        await kv.del(`contact_submission_${submission.timestamp}_${id}`);
      }
    }

    return c.json({
      success: true,
      message: "Submission deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting submission:", error);
    return c.json({ error: "Failed to delete submission" }, 500);
  }
});

Deno.serve(app.fetch);
