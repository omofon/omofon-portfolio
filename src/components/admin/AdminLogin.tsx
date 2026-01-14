import { useState, type FormEvent, type ChangeEvent } from "react";
import { createClient } from "@supabase/supabase-js";
import { projectId, publicAnonKey } from "../../utils/supabase/info";
import { LogIn } from "lucide-react";

interface AdminLoginProps {
  onLoginSuccess: (accessToken: string) => void;
}

export function AdminLogin({ onLoginSuccess }: AdminLoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const supabase = createClient(
    `https://${projectId}.supabase.co`,
    publicAnonKey
  );

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword(
        {
          email,
          password,
        }
      );

      if (authError) {
        throw new Error(authError.message);
      }

      if (data.session?.access_token) {
        onLoginSuccess(data.session.access_token);
      } else {
        throw new Error("No access token received");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err instanceof Error ? err.message : "Failed to login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-center mb-8">
          <LogIn className="w-12 h-12 text-primary" />
        </div>

        <h1 className="text-3xl font-bold text-center mb-2">Admin Login</h1>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
          Access your dashboard
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              placeholder="admin@example.com"
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary/90 text-white dark:text-white py-3 rounded-lg transition-colors disabled:opacity-50"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            First time here?{" "}
            <a href="/admin/setup" className="text-primary hover:underline">
              Create admin account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
