import { Link, useLocation } from "react-router-dom";
import { BookOpen, Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-navy px-4 py-10">
      <div className="max-w-md w-full text-center">
        <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold mx-auto mb-6">
          <BookOpen className="w-7 h-7 text-primary-foreground" aria-hidden="true" />
        </div>
        <p className="font-display text-5xl font-bold text-gradient-gold mb-3">404</p>
        <h1 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">Page not found</h1>
        <p className="text-sm text-muted-foreground mb-6">
          We couldn&apos;t find <span className="text-foreground font-medium break-all">{location.pathname}</span>. It may
          have been moved, or the link is incorrect.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            Back to home
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:border-primary/40 transition-colors"
          >
            <Search className="w-4 h-4" aria-hidden="true" />
            Browse study sections
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
