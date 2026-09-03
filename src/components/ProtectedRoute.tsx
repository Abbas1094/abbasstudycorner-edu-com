import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

interface ProtectedRouteProps {
  children: ReactNode;
  /** When true, the signed-in user must hold the admin role (checked in the database). */
  requireAdmin?: boolean;
}

/**
 * Waits for session initialisation before deciding, so there is no
 * flash of protected content and no redirect loop.
 */
export const ProtectedRoute = ({ children, requireAdmin = false }: ProtectedRouteProps) => {
  const { session, isAdmin, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-navy" role="status" aria-live="polite">
        <Loader2 className="w-6 h-6 animate-spin text-primary" aria-hidden="true" />
        <span className="sr-only">Checking your session…</span>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/auth" replace state={{ from: location.pathname }} />;
  }

  if (requireAdmin && !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-navy px-4">
        <div className="max-w-sm text-center">
          <h1 className="font-display text-2xl font-bold text-foreground mb-2">Access restricted</h1>
          <p className="text-sm text-muted-foreground mb-5">
            This area is for administrators only. If you think this is a mistake, contact support.
          </p>
          <a href="/" className="text-primary underline hover:text-primary/90 text-sm">
            Return to home
          </a>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
