import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-4 text-center">
    <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
      Built with <Heart size={12} className="text-primary" /> by Shrestha Bhatnagar
    </p>
  </footer>
);

export default Footer;
