import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted opacity-50"></div>

      <div className="max-w-7xl mx-auto w-full px-4 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <div className="space-y-6">
          <div className="text-accent text-sm font-semibold tracking-wide">Best Prices Guaranteed</div>
          <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
            Book Your <span className="text-accent">Luxury Hotel</span> With Best Hotel{" "}
            <span className="text-accent">Booking</span> Company, <span className="text-accent">Hotelux.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover a sanctuary where sun-kissed shores meet timeless elegance. Our Beach Haven offers a serene escape
            infused with luxurious comfort and breathtaking natural beauty.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base">
              Discover More
            </Button>
          </div>

          {/* Customer satisfaction badge */}
          <div className="flex items-center gap-4 pt-8">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-accent/20 border-2 border-white flex items-center justify-center text-xs font-semibold"
                >
                  👤
                </div>
              ))}
            </div>
            <div>
              <div className="font-semibold">Customer Satisfied</div>
              <div className="text-sm text-muted-foreground">4.8 (15k Reviews)</div>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="relative h-96 md:h-full min-h-96">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl overflow-hidden">
            <img src="/luxury-hotel-bedroom-with-ocean-view.jpg" alt="Luxury hotel room" className="w-full h-full object-cover" />
          </div>
          {/* Play button overlay */}
          <button className="absolute bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg">
            <Play className="w-6 h-6 fill-current" />
          </button>
        </div>
      </div>
    </section>
  )
}
