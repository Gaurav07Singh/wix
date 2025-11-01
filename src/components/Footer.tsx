import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", { email, agreed });
    setEmail("");
    setAgreed(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border py-16 px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left - Explore Menu */}
          <div>
            <h3 className="text-2xl font-bold mb-6">EXPLORE</h3>
            <nav className="flex flex-col gap-3">
              <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">
                All Products
              </a>
              <a href="#cart" className="text-muted-foreground hover:text-primary transition-colors">
                My Cart
              </a>
              <a href="#profile" className="text-muted-foreground hover:text-primary transition-colors">
                My Profile
              </a>
              <button
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Back to Top
              </button>
            </nav>
          </div>

          {/* Right - Newsletter */}
          <div>
            <h3 className="text-2xl font-bold mb-6">NEWSLETTER</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-secondary border-border"
              />
              <div className="flex items-center gap-2">
                <Checkbox
                  id="newsletter"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked as boolean)}
                />
                <label
                  htmlFor="newsletter"
                  className="text-sm text-muted-foreground cursor-pointer"
                >
                  I agree to receive promotional emails
                </label>
              </div>
              <Button type="submit" variant="solid" size="lg" className="w-full">
                SUBMIT
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Credit */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          Made By Haldar AI.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
