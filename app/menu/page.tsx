import { Container } from "@/components/ui/container";
import MenuCategories from "@/components/menu/menu-categories";
import MenuItemList from "@/components/menu/menu-item-list";

export default function MenuPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <div className="bg-accent/10 py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Our Menu</h1>
            <p className="text-lg text-muted-foreground">
              Explore our carefully crafted seasonal offerings featuring the finest local ingredients
            </p>
          </div>
        </Container>
      </div>

      {/* Menu Content */}
      <Container className="py-12">
        <MenuCategories />
        <MenuItemList />
      </Container>
    </div>
  );
}