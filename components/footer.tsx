import { Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary font-bold">
                H
              </div>
              <div>
                <div className="font-bold">Hotelux</div>
                <div className="text-xs text-primary-foreground/70">Hotel & Resort Booking</div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Secure other greater pleasures, or else he endures pains to avoid worse pains selection
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Our Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Help & FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Our Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  24/7 Front Desk
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Parking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Room Service
                </a>
              </li>
            </ul>
          </div>

          {/* Official Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Official Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(88) 574 7546 027</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(88) 574 7546 027</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>example@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>example@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; 2025 Hotelux. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
