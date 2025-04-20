"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon, ShoppingCart } from "lucide-react";
import { MenuItem } from "@/lib/menu-data";
import { useToast } from "@/hooks/use-toast";

interface AddToCartButtonProps {
  item: MenuItem;
}

const AddToCartButton = ({ item }: AddToCartButtonProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = () => {
    // Here we would actually add the item to the cart store
    toast({
      title: "Added to cart",
      description: `${quantity} × ${item.name} added to your cart`,
    });
    
    // Reset state
    setQuantity(1);
    setIsAdding(false);
  };

  if (!isAdding) {
    return (
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => setIsAdding(true)}
        className="text-accent hover:text-accent-foreground hover:bg-accent/10"
      >
        <ShoppingCart className="h-4 w-4 mr-2" />
        Add to Cart
      </Button>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <Button 
        variant="outline" 
        size="icon" 
        className="h-8 w-8"
        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
      >
        <MinusIcon className="h-3 w-3" />
      </Button>
      <span className="w-6 text-center">{quantity}</span>
      <Button 
        variant="outline" 
        size="icon" 
        className="h-8 w-8"
        onClick={() => setQuantity(quantity + 1)}
      >
        <PlusIcon className="h-3 w-3" />
      </Button>
      <Button 
        size="sm" 
        className="bg-accent text-accent-foreground hover:bg-accent/90"
        onClick={handleAddToCart}
      >
        Add
      </Button>
    </div>
  );
};

export default AddToCartButton;