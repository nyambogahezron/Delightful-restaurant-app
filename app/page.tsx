import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Facilities from "@/components/facilities"
import Blog from "@/components/blog"
import Gallery from "@/components/gallery"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Facilities />
      <Blog />
      <Gallery />
      <Newsletter />
      <Footer />
    </main>
  )
}
