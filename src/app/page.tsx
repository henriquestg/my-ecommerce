import "./page.scss";

import lustre from "../../public/lustre.png";

import SocialMedia from "@/Components/SocialMedia";
import { NavBar } from "@/Components/NavBar";
import { HeaderShowcase } from "@/Components/HeaderShowcase";
import { AboutProduct } from "@/Components/AboutProduct";
import { AboutUs } from "@/Components/AboutUs";
import { FeaturedProducts } from "@/Components/FeaturedProducts";
import { Tagline } from "@/Components/Tagline";
import { Button } from "@/Components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <SocialMedia />
      <NavBar />
      <section className="container-website">
        <HeaderShowcase />
        <AboutProduct />
        <AboutUs />
        <FeaturedProducts
          title="Featured Products"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        />
      </section>
      <Tagline />
      <section className="container-website">
        <FeaturedProducts
          title="Popular Products"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        />
      </section>
    </main>
  );
}
