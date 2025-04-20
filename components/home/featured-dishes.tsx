"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const featuredDishes = [
  {
    id: 1,
    name: "Truffle Risotto",
    description: "Creamy Arborio rice with black truffle, porcini mushrooms, and aged Parmesan.",
    price: 28,
    category: "Main Course",
    image: "https://images.pexels.com/photos/6287495/pexels-photo-6287495.jpeg",
    popular: true,
  },
  {
    id: 2,
    name: "Seared Scallops",
    description: "Pan-seared scallops with cauliflower purée, crispy pancetta, and herb oil.",
    price: 32,
    category: "Seafood",
    image: "https://images.pexels.com/photos/8694617/pexels-photo-8694617.jpeg",
    popular: false,
  },
  {
    id: 3,
    name: "Chocolate Soufflé",
    description: "Warm chocolate soufflé with vanilla bean ice cream and raspberry coulis.",
    price: 14,
    category: "Dessert",
    image: "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg",
    popular: true,
  },
  {
    id: 4,
    name: "Beef Wellington",
    description: "Prime beef tenderloin with mushroom duxelles, wrapped in puff pastry.",
    price: 42,
    category: "Signature",
    image: "https://images.pexels.com/photos/6542780/pexels-photo-6542780.jpeg",
    popular: true,
  },
];

const FeaturedDishes = () => {
  const [hoveredDish, setHoveredDish] = useState<number | null>(null);

  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold">Featured Dishes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our chef's selection of seasonal specialties, crafted with the finest ingredients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 staggered-children">
          {featuredDishes.map((dish) => (
            <div 
              key={dish.id}
              className="group relative bg-card rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
              onMouseEnter={() => setHoveredDish(dish.id)}
              onMouseLeave={() => setHoveredDish(null)}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-500",
                    hoveredDish === dish.id ? "scale-110" : "scale-100"
                  )}
                />
                {dish.popular && (
                  <Badge className="absolute top-4 right-4 bg-accent text-white">
                    Popular
                  </Badge>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-playfair font-semibold">{dish.name}</h3>
                  <span className="font-semibold">${dish.price}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{dish.description}</p>
                <Link 
                  href={`/menu/${dish.id}`} 
                  className="text-accent flex items-center text-sm font-medium hover:underline"
                >
                  Order now <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/menu">View Full Menu</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedDishes;