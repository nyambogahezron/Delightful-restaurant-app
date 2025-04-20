import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] mb-16">
        <Image
          src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
          alt="Restaurant interior"
          fill
          className="object-cover brightness-[0.7]"
        />
        <Container className="relative h-full flex items-center z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Our Story</h1>
            <p className="text-lg opacity-90">
              A culinary journey built on passion, tradition, and innovation
            </p>
          </div>
        </Container>
      </div>

      <Container>
        {/* Our Story */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-playfair font-bold mb-6">The Savory Experience</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded in 2010 by acclaimed chef Michael Laurent, Savory began as a small bistro dedicated to showcasing the finest seasonal ingredients. Our philosophy has always been simple: respect the ingredients, honor traditional techniques, and embrace creativity.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              What started as an intimate 30-seat restaurant has evolved into a culinary destination, but our commitment to quality and hospitality remains unchanged. We believe dining is not just about food—it's about creating memorable experiences through exceptional service, ambiance, and flavors that tell a story.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, our kitchen team continues to push boundaries while staying true to our roots. Each dish is thoughtfully crafted to balance familiar comfort with unexpected elements that delight and surprise.
            </p>
          </div>
        </section>

        {/* Chef Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg"
                alt="Chef Michael Laurent"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-playfair font-bold">Meet Our Chef</h2>
              <p className="text-muted-foreground leading-relaxed">
                With over 20 years of culinary experience across Europe and North America, Chef Michael Laurent brings a wealth of knowledge and passion to Savory's kitchen. Trained in classical French techniques but inspired by global flavors, Michael's approach combines tradition with innovation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                "My philosophy is simple—start with the best ingredients, treat them with respect, and let their natural flavors shine. Great cooking doesn't need to be complicated; it needs to be thoughtful."
              </p>
              <p className="italic">- Chef Michael Laurent</p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-8 text-center space-y-4">
              <h3 className="text-xl font-playfair font-semibold">Sustainability</h3>
              <p className="text-muted-foreground">
                We partner with local farmers and suppliers who share our commitment to sustainable practices. Our menu changes seasonally to reflect what's fresh and available locally.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 text-center space-y-4">
              <h3 className="text-xl font-playfair font-semibold">Craftsmanship</h3>
              <p className="text-muted-foreground">
                From our house-baked breads to our handcrafted desserts, we take pride in making everything from scratch with attention to detail and traditional techniques.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 text-center space-y-4">
              <h3 className="text-xl font-playfair font-semibold">Community</h3>
              <p className="text-muted-foreground">
                We believe in giving back to our community through partnerships with local organizations, mentoring young chefs, and creating a welcoming space for all.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary/50 rounded-lg p-10 text-center">
          <h2 className="text-2xl font-playfair font-bold mb-4">Come Experience Savory</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Whether you're celebrating a special occasion or simply enjoying a night out, we look forward to welcoming you and creating a memorable dining experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/reservation">Reserve a Table</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </Container>
    </div>
  );
}