import Image from "next/image";
import { Button } from "../Button";
import "./styles.scss";

import Sofa from "../../../public/sofa.png";

export function HeaderShowcase() {
  return (
    <div className="container-showcase">
      <div className="container-header">
        <div className="title">
          <h2>Transform Your Home with Our Stunning Furniture Collection</h2>
        </div>
        <div className="description">
          <p>
            Welcome to our furniture store, where we believe that a
            well-furnished home is a happy home. We offer a wide selection of
            high-quality furniture for every room in your home, from cozy sofas
            and elegant dining sets to stylish office desks and comfortable
            beds.
          </p>
          <div className="btn">
            <Button text="Shop Now" />
            <Button text="Learn More" />
          </div>
        </div>
      </div>
      <div className="imagem-description">
        <Image src={Sofa} alt="logo" />
      </div>
    </div>
  );
}
