"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import AddToCartButton from "@/components/menu/add-to-cart-button";
import { Card, CardContent } from "@/components/ui/card";
import { menuItems } from "@/lib/menu-data";

const MenuItemList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredItems = menuItems.filter((item) => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <Input
          type="text"
          placeholder="Search menu items..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-children">
        {filteredItems.map((item) => (
          <Card key={item.id} className="overflow-hidden group">
            <div className="relative h-60 w-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {item.dietary.length > 0 && (
                <div className="absolute top-3 right-3 flex flex-wrap justify-end gap-1">
                  {item.dietary.map((diet) => (
                    <Badge 
                      key={diet} 
                      variant="outline" 
                      className="bg-background/80 backdrop-blur-sm"
                    >
                      {diet}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            <CardContent className="p-5">
              <div className="flex justify-between items-start gap-2 mb-2">
                <h3 className="text-lg font-playfair font-semibold">{item.name}</h3>
                <span className="font-semibold">${item.price.toFixed(2)}</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{item.category}</span>
                <AddToCartButton item={item} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No menu items match your search.</p>
        </div>
      )}
    </div>
  );
};

export default MenuItemList;