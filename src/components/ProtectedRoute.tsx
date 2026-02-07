import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
}

/**
 * Basic route protection component.
 * Currently redirects to home since no auth system is implemented.
 * When authentication is added, this should check for valid session.
 */
export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  // Since there's no authentication system in this app,
  // we simply block access to admin routes by redirecting to home.
  // This prevents casual access while the app doesn't have auth.
  // 
  // When authentication is implemented, replace this with:
  // const [session, setSession] = useState<Session | null>(null);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => { ... check supabase.auth.getSession() ... }, []);
  
  // For now, admin routes are completely disabled
  // Remove this redirect when implementing authentication
  const isAdminEnabled = false;
  
  if (!isAdminEnabled) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
