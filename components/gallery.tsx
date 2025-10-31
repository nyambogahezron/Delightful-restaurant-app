export default function Gallery() {
  const images = [
    "/women-friends-party-celebration.jpg",
    "/cocktails-drinks-tropical.jpg",
    "/resort-pool-beach-sunset.jpg",
    "/luxury-bedroom-ocean-view.jpg",
    "/night-resort-instagram.jpg",
    "/family-swimming-pool-fun.jpg",
  ]

  return (
    <section className="py-0 px-0 bg-background">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-0 h-64 md:h-80">
        {images.map((image, i) => (
          <div key={i} className="relative overflow-hidden group cursor-pointer">
            <img
              src={image || "/placeholder.svg"}
              alt={`Gallery ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
          </div>
        ))}
      </div>
    </section>
  )
}
