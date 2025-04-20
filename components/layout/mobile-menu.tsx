"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  open: boolean;
  navLinks: NavLink[];
}

const MobileMenu = ({ open, navLinks }: MobileMenuProps) => {
  const pathname = usePathname();

  if (!open) return null;

  return (
    <div className="md:hidden bg-background border-t">
      <div className="py-4 px-4 space-y-4">
        <nav className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-base font-medium py-2 transition-colors hover:text-accent",
                pathname === link.href
                  ? "text-accent font-semibold"
                  : "text-foreground/80"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="pt-4 border-t flex flex-col space-y-3">
          <Link href="/account">
            <Button variant="outline" className="w-full justify-start">
              My Account
            </Button>
          </Link>
          <Button className="w-full">Reserve Table</Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;