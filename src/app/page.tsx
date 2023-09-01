import SocialMedia from "@/Components/SocialMedia";
import { NavBar } from "@/Components/NavBar";
import { HeaderShowcase } from "@/Components/HeaderShowcase";
import "./page.scss";
import { AboutProduct } from "@/Components/AboutProduct";
import { AboutUs } from "@/Components/AboutUs";

export default function Home() {
  return (
    <main>
      <SocialMedia />
      <NavBar />
      <div className="container-website">
        <HeaderShowcase />
        <AboutProduct />
        <AboutUs />
      </div>
    </main>
  );
}
