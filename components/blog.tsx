import { Button } from "@/components/ui/button"
import { MessageCircle, User } from "lucide-react"

const blogPosts = [
  {
    title: "Relaxing & Travel In Our Hotel",
    author: "Adam Smith",
    comments: "01 Comment",
    date: "June 16, 2025",
    image: "/hotel-reception-staff-customer-service.jpg",
  },
  {
    title: "Enjoy Your Holidays",
    author: "Harbert Spin",
    comments: "01 Comment",
    date: "Feb 15, 2025",
    image: "/woman-enjoying-drinks-by-pool.jpg",
  },
  {
    title: "Beautiful Appointed Suites",
    author: "Alisha Martin",
    comments: "01 Comment",
    date: "June 16, 2025",
    image: "/luxury-hotel-suite-wedding-event.jpg",
  },
]

export default function Blog() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-accent text-sm font-semibold tracking-wide mb-4">OUR BLOGS</div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Explore Our Latest <span className="text-accent">News</span>
          </h2>
        </div>

        {/* Blog grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <article key={i} className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded text-sm font-semibold text-foreground">
                  {post.date}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {post.comments}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{post.title}</h3>
                <Button variant="link" className="text-accent hover:text-accent/80 p-0">
                  Read More →
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
