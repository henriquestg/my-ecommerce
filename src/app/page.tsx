import "./page.scss";

import SocialMedia from "@/Components/SocialMedia";
import { NavBar } from "@/Components/NavBar";
import { HeaderShowcase } from "@/Components/HeaderShowcase";
import { AboutProduct } from "@/Components/AboutProduct";
import { AboutUs } from "@/Components/AboutUs";
import { FeaturedProducts } from "@/Components/FeaturedProducts";

export default function Home() {
  return (
    <main>
      <SocialMedia />
      <NavBar />
      <section className="container-website">
        <HeaderShowcase />
        <AboutProduct />
        <AboutUs />
        <FeaturedProducts />
      </section>
    </main>
  );
}
