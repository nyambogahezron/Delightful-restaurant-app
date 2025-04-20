"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Food Critic",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    rating: 5,
    text: "The ambiance, service, and culinary creativity at Savory are absolutely exceptional. Each dish tells a story and showcases the chef's passion for innovative cooking techniques while respecting traditional flavors.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Regular Customer",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    rating: 5,
    text: "I've been dining at Savory monthly for over a year, and it consistently exceeds my expectations. Their seasonal menu always offers something new to experience, and the wine pairings are impeccable.",
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Local Resident",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    rating: 4,
    text: "The perfect spot for special occasions. We celebrated our anniversary here and were treated to an unforgettable culinary journey. The service staff was attentive and knowledgeable about every dish.",
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Business Executive",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    rating: 5,
    text: "Savory is my go-to restaurant for client meetings. The sophisticated atmosphere and outstanding cuisine never fail to impress. Their attention to detail in both food preparation and service is remarkable.",
  },
];

const Testimonials = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    
    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <section className="py-16 bg-secondary/50">
      <Container>
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold">What Our Guests Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover why our guests keep coming back to Savory
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="h-full border-none shadow-sm">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm flex-grow">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="relative static translate-y-0" />
            <div className="flex gap-1 items-center">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    current === index ? "w-6 bg-accent" : "w-2 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <CarouselNext className="relative static translate-y-0" />
          </div>
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonials;