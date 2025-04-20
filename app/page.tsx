import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import FeaturedDishes from "@/components/home/featured-dishes";
import Testimonials from "@/components/home/testimonials";
import RestaurantInfo from "@/components/home/restaurant-info";
import SpecialOffers from "@/components/home/special-offers";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
            alt="Restaurant interior with elegant table setting"
            fill
            priority
            className="object-cover brightness-[0.6]"
          />
        </div>
        <Container className="relative z-10 text-white">
          <div className="max-w-2xl space-y-6 fade-in">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold leading-tight">
              Exquisite Dining Experience
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Savor the artistry of fine cuisine in an elegant atmosphere. Our
              seasonal menu features locally-sourced ingredients prepared with
              passion and creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href="/menu">Explore Our Menu</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20" asChild>
                <Link href="/reservation">Reserve a Table</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Dishes Section */}
      <FeaturedDishes />

      {/* Special Offers & Promotions */}
      <SpecialOffers />

      {/* Restaurant Information */}
      <RestaurantInfo />

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
}