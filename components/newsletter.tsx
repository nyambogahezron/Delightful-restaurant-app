"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
              Subscribe To Our Newsletter To Get Latest Update
            </h2>
          </div>

          {/* Right - subscription form */}
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 flex-1"
            />
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
