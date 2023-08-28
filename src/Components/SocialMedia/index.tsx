import { Facebook } from "@/Components/Icon/Facebook";
import { Linkedin } from "@/Components/Icon/Linkedin";
import { Twitter } from "@/Components/Icon/Twitter";
import { Instagram } from "@/Components/Icon/Instagram";
import { User } from "@/Components/Icon/User";

import "./styles.scss";
import { ButtonHeader } from "../ButtonHeader";

export default function SocialMedia() {
  return (
    <section className="socialMidia">
      <a href="#">
        <Facebook />
      </a>
      <a href="#">
        <Instagram />
      </a>
      <a href="#">
        <Twitter />
      </a>
      <a href="#">
        <Linkedin />
      </a>
      <div className="buttonIcon">
        <ButtonHeader icon={<User />} text="Sign In" />
      </div>
    </section>
  );
}
