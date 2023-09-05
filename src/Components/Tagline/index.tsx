import Image from "next/image";
import { Button } from "../Button";
import lustre from "../../../public/lustre.png";
import "./styles.scss";

export function Tagline() {
  return (
    <div className="container-tagline">
      <div className="sales-tagline">
        <p>Tagline</p>
        <h1>Sales Up to 50%</h1>
        <Button text="Shop Now" isBlack={true} />
      </div>
      <Image src={lustre} alt="Imagem Lustre" width={237} height={288} />
    </div>
  );
}
