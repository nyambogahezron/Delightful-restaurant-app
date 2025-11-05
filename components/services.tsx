import { Bed, Waves, Dumbbell, UtensilsCrossed, Sparkles, Car, ArrowRight } from "lucide-react"

const services = [
  { icon: Bed, title: "Rooms And Suites", color: "text-accent" },
  { icon: Waves, title: "Swimming Pool", color: "text-accent" },
  { icon: Dumbbell, title: "Fitness Center", color: "text-accent" },
  { icon: UtensilsCrossed, title: "Restaurants", color: "text-accent" },
  { icon: Sparkles, title: "Cleaning Everyday", color: "text-accent" },
  { icon: Car, title: "Airport Taxi", color: "text-accent" },
]

export default function Services() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left content */}
          <div className="space-y-6">
            <div className="text-accent text-sm font-semibold tracking-wide">OUR SERVICES</div>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Check out our awesome <span className="text-accent">services</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore
            </p>
          </div>

          {/* Right - first row of services */}
          <div className="grid grid-cols-3 gap-4">
            {services.slice(0, 3).map((service, i) => {
              const Icon = service.icon
              return (
                <div key={i} className="bg-muted p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                  <Icon className={`w-12 h-12 mx-auto mb-4 ${service.color}`} />
                  <h3 className="font-semibold text-foreground">{service.title}</h3>
                </div>
              )
            })}
          </div>
        </div>

        {/* Second row of services */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.slice(3).map((service, i) => {
            const Icon = service.icon
            return (
              <div key={i} className="bg-muted p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <Icon className={`w-12 h-12 mx-auto mb-4 ${service.color}`} />
                <h3 className="font-semibold text-foreground">{service.title}</h3>
              </div>
            )
          })}
          {/* Explore More */}
          <div className="bg-muted p-8 rounded-lg flex flex-col items-center justify-center hover:shadow-lg transition-shadow cursor-pointer group">
            <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
              <ArrowRight className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground">Explore More!</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
