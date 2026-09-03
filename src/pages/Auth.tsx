import { useState, FormEvent, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BookOpen, Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";

const Auth = () => {
  const navigate = useNavigate();
  const { signIn, signUp, session, loading: authLoading } = useAuth();
  const [tab, setTab] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!authLoading && session) navigate("/", { replace: true });
  }, [authLoading, session, navigate]);

  const validate = () => {
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) return "Please enter a valid email address.";
    if (password.length < 6) return "Password must be at least 6 characters.";
    if (tab === "signup" && displayName.trim().length < 2) return "Please enter your name.";
    return null;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const invalid = validate();
    if (invalid) {
      setError(invalid);
      return;
    }
    setError(null);
    setSubmitting(true);
    const result =
      tab === "signin"
        ? await signIn(email.trim(), password)
        : await signUp(email.trim(), password, displayName.trim());
    setSubmitting(false);

    if (result.error) {
      setError(result.error);
      return;
    }
    if (tab === "signin") {
      toast.success("Signed in successfully");
      navigate("/", { replace: true });
    } else {
      toast.success("Account created. You can start studying now.");
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-navy flex flex-col items-center justify-center px-4 py-10">
      <Link to="/" className="flex items-center gap-3 mb-8" aria-label="Back to Abbas Study Corner home">
        <div className="w-11 h-11 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
          <BookOpen className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
        </div>
        <div>
          <h1 className="font-display text-xl font-bold text-gradient-gold leading-tight">Abbas Study Corner</h1>
          <p className="text-xs text-muted-foreground">Academic &amp; Armed Forces Preparation</p>
        </div>
      </Link>

      <div className="w-full max-w-md bg-gradient-card border border-border rounded-2xl p-5 sm:p-7">
        <Tabs value={tab} onValueChange={(v) => { setTab(v); setError(null); }}>
          <TabsList className="grid grid-cols-2 w-full mb-6">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <TabsContent value="signup" className="mt-0 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="displayName">Your name</Label>
                <Input
                  id="displayName"
                  autoComplete="name"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="e.g. Muhammad Abbas"
                />
              </div>
            </TabsContent>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete={tab === "signin" ? "current-password" : "new-password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  className="pr-11"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-foreground rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <p role="alert" className="text-sm text-destructive bg-destructive/10 border border-destructive/30 rounded-md px-3 py-2">
                {error}
              </p>
            )}

            <Button type="submit" className="w-full" disabled={submitting}>
              {submitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />}
              {tab === "signin" ? "Sign In" : "Create Account"}
            </Button>
          </form>
        </Tabs>

        <p className="text-xs text-muted-foreground text-center mt-5">
          Signing in saves your progress across devices. You can keep studying without an account too.
        </p>
      </div>

      <Link to="/" className="mt-6 text-sm text-muted-foreground hover:text-primary transition-colors">
        ← Continue without signing in
      </Link>
    </div>
  );
};

export default Auth;
