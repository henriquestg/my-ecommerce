import SocialMedia from "@/Components/SocialMedia";
import { NavBar } from "@/Components/NavBar";
import { HeaderShowcase } from "@/Components/HeaderShowcase";
import "./page.scss";

export default function Home() {
  return (
    <main>
      <SocialMedia />
      <NavBar />
      <div className="container-website">
        <HeaderShowcase />
      </div>
    </main>
  );
}
