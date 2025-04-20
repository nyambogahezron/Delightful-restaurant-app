"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", name: "All Items" },
  { id: "starters", name: "Starters" },
  { id: "main-courses", name: "Main Courses" },
  { id: "seafood", name: "Seafood" },
  { id: "vegetarian", name: "Vegetarian" },
  { id: "desserts", name: "Desserts" },
  { id: "drinks", name: "Drinks" },
];

interface MenuCategoriesProps {
  initialCategory?: string;
}

const MenuCategories = ({ initialCategory = "all" }: MenuCategoriesProps) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  return (
    <div className="mb-10">
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            className={cn(
              "mb-2",
              activeCategory === category.id 
                ? "bg-accent text-accent-foreground hover:bg-accent/90" 
                : ""
            )}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MenuCategories;