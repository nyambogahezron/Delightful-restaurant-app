import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const RestaurantInfo = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 slide-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold">
              Where Culinary Artistry Meets Exceptional Service
            </h2>
            <p className="text-muted-foreground">
              Located in the heart of the city, Savory offers a sophisticated dining experience with 
              a focus on seasonal ingredients and innovative techniques. Our chef-driven menu changes 
              regularly to showcase the best local produce and global inspirations.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-playfair font-semibold">Location</h4>
                <address className="not-italic text-muted-foreground">
                  123 Gourmet Street<br />
                  New York, NY 10001
                </address>
              </div>
              <div>
                <h4 className="text-lg font-playfair font-semibold">Hours</h4>
                <p className="text-muted-foreground">
                  Mon-Thu: 11am-10pm<br />
                  Fri-Sat: 11am-11pm<br />
                  Sun: 11am-9pm
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/reservation">Reserve a Table</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative grid grid-cols-2 gap-4 h-[500px]">
            <div className="relative col-span-2 row-span-2">
              <Image
                src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg"
                alt="Restaurant interior"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
                alt="Restaurant ambiance"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/5865052/pexels-photo-5865052.jpeg"
                alt="Chef preparing food"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RestaurantInfo;