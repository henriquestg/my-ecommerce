import Image from "next/image";
import Abajur from "../../../public/Abajur.png";
import "./styles.scss";

export function AboutProduct() {
  return (
    <div className="container-about">
      <div className="container-list">
        <p>About Us</p>
        <h1>About the shop</h1>
        <p>
          Whether youre moving into a new home, redecorating your current space,
          or just looking for a few accents to spruce up your style, weve got
          you covered. Shop our products online, and enjoy fast and free
          shipping, easy returns, and friendly customer service.
        </p>
        <div className="list-item">
          <div className="item">
            <h1>10x</h1>
            <p>Increase in productivity</p>
          </div>
          <div className="item">
            <h1>300+</h1>
            <p>Product</p>
          </div>
        </div>

        <div className="list-item">
          <div className="item">
            <h1>5K+</h1>
            <p>Happy customers </p>
          </div>
          <div className="item">
            <h1>100+</h1>
            <p>5-star reviews</p>
          </div>
        </div>
      </div>
      <Image src={Abajur} alt="Abajur" width={620} height={640} />
    </div>
  );
}
