"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const specialOffers = [
  {
    id: 1,
    title: "Prix Fixe Weekday Lunch",
    description: "Enjoy a 3-course lunch with a glass of house wine for $45 every weekday from 12-3pm.",
    image: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg",
    cta: "View Menu"
  },
  {
    id: 2,
    title: "Wine Tasting Wednesdays",
    description: "Sample our sommelier's selection of premium wines paired with complimentary appetizers.",
    image: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg",
    cta: "Learn More"
  },
  {
    id: 3,
    title: "Chef's Tasting Experience",
    description: "A special 7-course tasting menu showcasing our chef's innovative creations for $120 per person.",
    image: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg",
    cta: "Reserve Now"
  }
];

const SpecialOffers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className="py-16 bg-muted">
      <Container>
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold">Special Offers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our exclusive promotions and culinary events
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 staggered-children">
          {specialOffers.map((offer, index) => (
            <Card 
              key={offer.id}
              className={cn(
                "overflow-hidden transition-all duration-300 hover:shadow-lg border-none",
                index === activeIndex ? "ring-2 ring-accent" : ""
              )}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="relative h-48">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold mb-3">{offer.title}</h3>
                <p className="text-muted-foreground mb-4">{offer.description}</p>
                <Button variant={index === activeIndex ? "default" : "outline"}>
                  {offer.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SpecialOffers;