"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  ShoppingBag,
  CreditCard
} from "lucide-react";

// Mock cart data - in a real app, this would come from a cart store
const MOCK_CART_ITEMS = [
  {
    id: 4,
    name: "Filet Mignon",
    price: 48,
    quantity: 2,
    image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg",
  },
  {
    id: 13,
    name: "Chocolate Soufflé",
    price: 14,
    quantity: 1,
    image: "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<typeof MOCK_CART_ITEMS>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock loading state
  useEffect(() => {
    setTimeout(() => {
      setCartItems(MOCK_CART_ITEMS);
      setIsLoading(false);
    }, 800);
  }, []);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  return (
    <div className="pt-24 pb-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-playfair font-bold mb-8">Your Cart</h1>

          {isLoading ? (
            // Skeleton loading state
            <div className="space-y-6">
              {[1, 2].map((i) => (
                <div key={i} className="animate-pulse flex gap-4">
                  <div className="bg-muted rounded w-24 h-24"></div>
                  <div className="space-y-3 flex-1">
                    <div className="h-4 bg-muted rounded w-1/3"></div>
                    <div className="h-3 bg-muted rounded w-1/4"></div>
                    <div className="h-8 bg-muted rounded w-32"></div>
                  </div>
                  <div className="w-20 h-8 bg-muted rounded"></div>
                </div>
              ))}
            </div>
          ) : cartItems.length === 0 ? (
            // Empty cart state
            <div className="text-center py-16 space-y-6">
              <div className="flex justify-center">
                <ShoppingBag className="h-16 w-16 text-muted-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-playfair font-semibold">Your cart is empty</h3>
                <p className="text-muted-foreground">Looks like you haven't added any items yet.</p>
              </div>
              <Button className="mt-4" asChild>
                <Link href="/menu">
                  Browse Our Menu
                </Link>
              </Button>
            </div>
          ) : (
            // Cart with items
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-6 py-4">
                      <div className="relative w-24 h-24 rounded-md overflow-hidden shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <p className="text-muted-foreground text-sm mt-1">${item.price.toFixed(2)} each</p>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-r-none"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <div className="px-3 h-8 border-y flex items-center justify-center w-10">
                              {item.quantity}
                            </div>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-l-none"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-destructive"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4 mr-1" /> Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />

                <div className="mt-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/menu">
                      <ArrowLeft className="h-4 w-4 mr-2" /> Continue Shopping
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-playfair text-xl font-semibold mb-4">Order Summary</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax (8%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-semibold text-base">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button className="w-full mt-6" size="lg">
                    <CreditCard className="h-4 w-4 mr-2" /> Proceed to Checkout
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    By proceeding, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}