import { Container } from "@/components/ui/container";
import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import LocationMap from "@/components/contact/location-map";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <Container>
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-lg mb-12">
            Have questions or want to make a special arrangement? 
            We're here to help make your dining experience exceptional.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-playfair font-semibold mb-6">Our Location</h2>
            <LocationMap />
          </div>
        </div>
      </Container>
    </div>
  );
}