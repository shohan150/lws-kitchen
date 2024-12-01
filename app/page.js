import Collections from "@/components/homepage/Collections";
import DeliveryForm from "@/components/homepage/DeliveryForm";
import HeroSection from "@/components/homepage/HeroSection";
import LatestRecipies from "@/components/homepage/LatestRecipies";
import PopularCats from "@/components/homepage/PopularCats";
import SuperDelicious from "@/components/homepage/SuperDelicious";

export default function Home() {
  return (
    <main className="container mx-auto px-4 mt-[100px]">

      <HeroSection />

      <SuperDelicious />

      <PopularCats />

      <DeliveryForm />

      <Collections />

      <LatestRecipies />

    </main>
  );
}
