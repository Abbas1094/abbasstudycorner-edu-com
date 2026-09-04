import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, LogOut, Save, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";

const ProfilePage = () => {
  const { user, profile, isAdmin, signOut, updateDisplayName } = useAuth();
  const [name, setName] = useState("");
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setName(profile?.display_name ?? "");
  }, [profile?.display_name]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (trimmed.length < 2) {
      toast.error("Display name must be at least 2 characters.");
      return;
    }
    setSaving(true);
    const { error } = await updateDisplayName(trimmed);
    setSaving(false);
    if (error) toast.error(error);
    else toast.success("Profile updated.");
  };

  return (
    <div className="min-h-screen bg-gradient-navy">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container px-4 sm:px-6 py-3 flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/" aria-label="Back to home">
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Home
            </Link>
          </Button>
          <h1 className="font-display text-lg sm:text-xl font-bold text-gradient-gold">My Profile</h1>
        </div>
      </header>

      <main className="container px-4 sm:px-6 py-8 max-w-md">
        <div className="bg-gradient-card border border-border rounded-2xl p-5 sm:p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
              <User className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="font-display font-bold text-foreground truncate">
                {profile?.display_name ?? "Student"}
              </p>
              <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
            </div>
          </div>

          <form onSubmit={handleSave} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="display-name">Display name</Label>
              <Input
                id="display-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                autoComplete="name"
              />
            </div>
            <Button type="submit" className="w-full" disabled={saving}>
              <Save className="w-4 h-4 mr-1.5" aria-hidden="true" />
              {saving ? "Saving…" : "Save changes"}
            </Button>
          </form>

          <div className="mt-6 pt-5 border-t border-border space-y-2.5">
            <Button variant="outline" className="w-full" asChild>
              <Link to="/progress">View my progress</Link>
            </Button>
            {isAdmin && (
              <Button variant="outline" className="w-full" asChild>
                <Link to="/admin/cleanup">Admin tools</Link>
              </Button>
            )}
            <Button
              variant="ghost"
              className="w-full"
              onClick={async () => {
                await signOut();
                navigate("/");
              }}
            >
              <LogOut className="w-4 h-4 mr-1.5" aria-hidden="true" />
              Sign out
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
