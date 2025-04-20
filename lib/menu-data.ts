export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  dietary: string[];
  ingredients?: string[];
  chef_special?: boolean;
}

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: 1,
    name: "Artisanal Cheese Plate",
    description: "Selection of aged cheeses served with fig jam, honey, and artisan crackers",
    price: 18,
    category: "Starters",
    image: "https://images.pexels.com/photos/1893611/pexels-photo-1893611.jpeg",
    dietary: ["Vegetarian"],
    chef_special: true
  },
  {
    id: 2,
    name: "Tuna Tartare",
    description: "Fresh yellowfin tuna with avocado, citrus, and crispy wonton chips",
    price: 22,
    category: "Starters",
    image: "https://images.pexels.com/photos/8512527/pexels-photo-8512527.jpeg",
    dietary: ["Gluten-Free"],
  },
  {
    id: 3,
    name: "Roasted Beet Salad",
    description: "Roasted heirloom beets with goat cheese, candied walnuts, and balsamic reduction",
    price: 16,
    category: "Starters",
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
    dietary: ["Vegetarian", "Gluten-Free"],
  },
  
  // Main Courses
  {
    id: 4,
    name: "Filet Mignon",
    description: "8oz prime beef with garlic mashed potatoes, roasted asparagus, and red wine reduction",
    price: 48,
    category: "Main Courses",
    image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg",
    dietary: ["Gluten-Free"],
    chef_special: true
  },
  {
    id: 5,
    name: "Truffle Risotto",
    description: "Creamy Arborio rice with black truffle, porcini mushrooms, and aged Parmesan",
    price: 28,
    category: "Main Courses",
    image: "https://images.pexels.com/photos/6287495/pexels-photo-6287495.jpeg",
    dietary: ["Vegetarian"],
  },
  {
    id: 6,
    name: "Herb-Crusted Rack of Lamb",
    description: "New Zealand lamb with Dijon-herb crust, pomegranate reduction, and root vegetables",
    price: 44,
    category: "Main Courses",
    image: "https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg",
    dietary: [],
  },
  
  // Seafood
  {
    id: 7,
    name: "Seared Scallops",
    description: "Pan-seared scallops with cauliflower purée, crispy pancetta, and herb oil",
    price: 36,
    category: "Seafood",
    image: "https://images.pexels.com/photos/8694617/pexels-photo-8694617.jpeg",
    dietary: [],
  },
  {
    id: 8,
    name: "Grilled Salmon",
    description: "Wild-caught salmon with lemon herb butter, quinoa pilaf, and seasonal vegetables",
    price: 32,
    category: "Seafood",
    image: "https://images.pexels.com/photos/840216/pexels-photo-840216.jpeg",
    dietary: ["Gluten-Free"],
  },
  {
    id: 9,
    name: "Cioppino",
    description: "Classic seafood stew with shrimp, clams, mussels, and fish in tomato broth",
    price: 38,
    category: "Seafood",
    image: "https://images.pexels.com/photos/9773116/pexels-photo-9773116.jpeg",
    dietary: [],
    chef_special: true
  },
  
  // Vegetarian
  {
    id: 10,
    name: "Wild Mushroom Gnocchi",
    description: "Handmade potato gnocchi with wild mushroom ragout, truffle cream, and fresh herbs",
    price: 26,
    category: "Vegetarian",
    image: "https://images.pexels.com/photos/4518839/pexels-photo-4518839.jpeg",
    dietary: ["Vegetarian"],
  },
  {
    id: 11,
    name: "Vegetable Wellington",
    description: "Roasted vegetables and mushroom duxelles wrapped in puff pastry with vegan demi-glace",
    price: 28,
    category: "Vegetarian",
    image: "https://images.pexels.com/photos/5911392/pexels-photo-5911392.jpeg",
    dietary: ["Vegan"],
  },
  {
    id: 12,
    name: "Eggplant Parmesan",
    description: "Crispy eggplant with house marinara, fresh mozzarella, and basil on linguine",
    price: 24,
    category: "Vegetarian",
    image: "https://images.pexels.com/photos/6541627/pexels-photo-6541627.jpeg",
    dietary: ["Vegetarian"],
  },
  
  // Desserts
  {
    id: 13,
    name: "Chocolate Soufflé",
    description: "Warm chocolate soufflé with vanilla bean ice cream and raspberry coulis",
    price: 14,
    category: "Desserts",
    image: "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg",
    dietary: ["Vegetarian"],
    chef_special: true
  },
  {
    id: 14,
    name: "Crème Brûlée",
    description: "Classic vanilla bean custard with caramelized sugar crust",
    price: 12,
    category: "Desserts",
    image: "https://images.pexels.com/photos/8180118/pexels-photo-8180118.jpeg",
    dietary: ["Vegetarian", "Gluten-Free"],
  },
  {
    id: 15,
    name: "Berry Pavlova",
    description: "Crisp meringue topped with fresh seasonal berries and chantilly cream",
    price: 13,
    category: "Desserts",
    image: "https://images.pexels.com/photos/2693447/pexels-photo-2693447.jpeg",
    dietary: ["Vegetarian", "Gluten-Free"],
  },
  
  // Drinks
  {
    id: 16,
    name: "Signature Old Fashioned",
    description: "Small batch bourbon, house-made bitters, orange peel, and luxardo cherry",
    price: 16,
    category: "Drinks",
    image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg",
    dietary: ["Contains Alcohol"],
  },
  {
    id: 17,
    name: "Cucumber Basil Gimlet",
    description: "Gin, fresh lime, muddled cucumber, basil, and simple syrup",
    price: 14,
    category: "Drinks",
    image: "https://images.pexels.com/photos/616836/pexels-photo-616836.jpeg",
    dietary: ["Contains Alcohol"],
  },
  {
    id: 18,
    name: "Artisanal Mocktail",
    description: "Seasonal fruits, herbs, and house-made syrups with sparkling water",
    price: 10,
    category: "Drinks",
    image: "https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg",
    dietary: ["Non-Alcoholic", "Vegan"],
  }
];