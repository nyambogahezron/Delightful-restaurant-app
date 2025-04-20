import Link from "next/link";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary mt-12 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-playfair font-semibold">Savory</h3>
            <p className="text-muted-foreground">
              Experience culinary excellence in a sophisticated atmosphere with
              our seasonal menu crafted from local ingredients.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://instagram.com" 
                className={buttonVariants({ variant: "ghost", size: "icon" })}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link 
                href="https://facebook.com" 
                className={buttonVariants({ variant: "ghost", size: "icon" })}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link 
                href="https://twitter.com" 
                className={buttonVariants({ variant: "ghost", size: "icon" })}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-medium">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="/menu" className="text-muted-foreground hover:text-foreground transition-colors">Menu</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-medium">Hours</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Monday - Thursday: 11am - 10pm</li>
              <li>Friday - Saturday: 11am - 11pm</li>
              <li>Sunday: 11am - 9pm</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-medium">Contact</h4>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>123 Gourmet Street</p>
              <p>New York, NY 10001</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@savory.com</p>
            </address>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Savory Restaurant. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;