"use client"

import { useState } from "react"
import { Menu, X, Search, ShoppingCart, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      {/* Top bar */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <span>+1 (550) 250 5260</span>
            <span>info@tanspot24.com</span>
            <span>4124 Cimmaron Road, CA 92806</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-80">
              𝕏
            </a>
            <a href="#" className="hover:opacity-80">
              f
            </a>
            <a href="#" className="hover:opacity-80">
              📌
            </a>
            <a href="#" className="hover:opacity-80">
              📷
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">
            H
          </div>
          <div>
            <div className="font-bold text-lg">Hotelux</div>
            <div className="text-xs text-muted-foreground">Hotel & Resort Booking</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#" className="text-foreground hover:text-accent transition">
            Home
          </a>
          <a href="#" className="text-foreground hover:text-accent transition">
            Pages
          </a>
          <a href="#" className="text-foreground hover:text-accent transition">
            Services
          </a>
          <a href="#" className="text-foreground hover:text-accent transition">
            Room
          </a>
          <a href="#" className="text-foreground hover:text-accent transition">
            Shop
          </a>
          <a href="#" className="text-foreground hover:text-accent transition">
            Blog
          </a>
          <a href="#" className="text-foreground hover:text-accent transition">
            Contact
          </a>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full">
            <Phone className="w-4 h-4 text-accent" />
            <div className="text-sm">
              <div className="text-xs text-muted-foreground">Call Anytime</div>
              <div className="font-semibold">+92 (8800) - 6780</div>
            </div>
          </div>
          <button className="p-2 hover:bg-muted rounded-lg transition">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-muted rounded-lg transition relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
          </button>
          <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
            Book Online
          </Button>
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden border-t border-border p-4 space-y-3">
          <a href="#" className="block text-foreground hover:text-accent transition">
            Home
          </a>
          <a href="#" className="block text-foreground hover:text-accent transition">
            Pages
          </a>
          <a href="#" className="block text-foreground hover:text-accent transition">
            Services
          </a>
          <a href="#" className="block text-foreground hover:text-accent transition">
            Room
          </a>
          <a href="#" className="block text-foreground hover:text-accent transition">
            Shop
          </a>
          <a href="#" className="block text-foreground hover:text-accent transition">
            Blog
          </a>
          <a href="#" className="block text-foreground hover:text-accent transition">
            Contact
          </a>
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Book Online</Button>
        </nav>
      )}
    </header>
  )
}
