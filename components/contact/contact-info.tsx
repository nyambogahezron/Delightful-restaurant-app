import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Calendar 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-playfair font-semibold mb-6">Contact Information</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-accent mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium">Address</h3>
              <address className="not-italic text-muted-foreground">
                123 Gourmet Street<br />
                New York, NY 10001
              </address>
            </div>
          </div>
          
          <div className="flex items-start">
            <Clock className="h-5 w-5 text-accent mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium">Opening Hours</h3>
              <ul className="text-muted-foreground">
                <li>Monday - Thursday: 11am - 10pm</li>
                <li>Friday - Saturday: 11am - 11pm</li>
                <li>Sunday: 11am - 9pm</li>
              </ul>
            </div>
          </div>
          
          <div className="flex items-start">
            <Phone className="h-5 w-5 text-accent mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium">Phone</h3>
              <p className="text-muted-foreground">(123) 456-7890</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Mail className="h-5 w-5 text-accent mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-muted-foreground">info@savory.com</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-muted p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <Calendar className="h-5 w-5 text-accent mr-2" />
          <h3 className="text-lg font-playfair font-semibold">Reservations</h3>
        </div>
        <p className="text-muted-foreground mb-4">
          For parties of 6 or more, we recommend making a reservation at least 48 hours in advance.
        </p>
        <Button asChild>
          <Link href="/reservation">Make a Reservation</Link>
        </Button>
      </div>
      
      <div>
        <h3 className="text-lg font-playfair font-semibold mb-3">Private Events</h3>
        <p className="text-muted-foreground mb-4">
          Looking to host a private event? Our elegant private dining room can accommodate up to 30 guests for a seated dinner or 50 for a standing reception.
        </p>
        <Button variant="outline">Learn About Private Events</Button>
      </div>
    </div>
  );
};

export default ContactInfo;