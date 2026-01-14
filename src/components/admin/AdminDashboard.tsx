import { useState, useEffect } from "react";
import { projectId, publicAnonKey } from "../../utils/supabase/info";
import { Trash2, Mail, User, Calendar, LogOut, RefreshCw } from "lucide-react";

interface Submission {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: number;
  createdAt: string;
}

interface AdminDashboardProps {
  accessToken: string;
  onLogout: () => void;
}

export function AdminDashboard({ accessToken, onLogout }: AdminDashboardProps) {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchSubmissions = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-170e0f1f/admin/submissions`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch submissions");
      }

      setSubmissions(data.submissions || []);
    } catch (err) {
      console.error("Error fetching submissions:", err);
      setError(
        err instanceof Error ? err.message : "Failed to fetch submissions"
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, [accessToken]);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this submission?")) {
      return;
    }

    setDeletingId(id);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-170e0f1f/admin/submissions/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to delete submission");
      }

      // Remove from state
      setSubmissions(submissions.filter((s) => s.id !== id));
    } catch (err) {
      console.error("Error deleting submission:", err);
      alert(err instanceof Error ? err.message : "Failed to delete submission");
    } finally {
      setDeletingId(null);
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Manage contact form submissions
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={fetchSubmissions}
                className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-4 py-2 text-sm bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Total Submissions
                </p>
                <p className="text-3xl font-bold mt-1">{submissions.length}</p>
              </div>
              <Mail className="w-10 h-10 text-primary opacity-50" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Latest Submission
                </p>
                <p className="text-lg font-semibold mt-1">
                  {submissions.length > 0
                    ? formatDate(submissions[0].timestamp).split(",")[0]
                    : "N/A"}
                </p>
              </div>
              <Calendar className="w-10 h-10 text-primary opacity-50" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Unique Users
                </p>
                <p className="text-3xl font-bold mt-1">
                  {new Set(submissions.map((s) => s.email)).size}
                </p>
              </div>
              <User className="w-10 h-10 text-primary opacity-50" />
            </div>
          </div>
        </div>

        {/* Submissions List */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold">Contact Submissions</h2>
          </div>

          {isLoading ? (
            <div className="p-12 text-center">
              <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Loading submissions...
              </p>
            </div>
          ) : error ? (
            <div className="p-12 text-center">
              <p className="text-red-500">{error}</p>
            </div>
          ) : submissions.length === 0 ? (
            <div className="p-12 text-center">
              <Mail className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
              <p className="text-gray-600 dark:text-gray-400">
                No submissions yet
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-900/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Message
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {submissions.map((submission) => (
                    <tr
                      key={submission.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-900/50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-foreground">
                          {submission.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {submission.email}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600 dark:text-gray-400 max-w-md truncate">
                          {submission.message}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {formatDate(submission.timestamp)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleDelete(submission.id)}
                          disabled={deletingId === submission.id}
                          className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 disabled:opacity-50"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
