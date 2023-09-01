import { Button } from "../Button";

import "./styles.scss";

export function AboutUs() {
  return (
    <div className="container-aboutus">
      <div className="info-store">
        <h1>Why Choose Us</h1>
        <p>
          Welcome to our furniture store, where we believe that a well-furnished
          home is a happy home. We offer a wide selection of high-quality
          furniture for every room in your home, from cozy sofas and elegant
          dining sets to stylish office desks and comfortable beds.
        </p>
        <Button text="Shop Now" isBlack={true} />
      </div>
      <div className="cotainer-list-aboutus">
        <div className="description-product">
          <div className="list-aboutus">
            <h1>1</h1>
            <h2>Affordable Prices</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <a href="#">Learn more </a>
          </div>
          <div className="list-aboutus">
            <h1>2</h1>
            <h2>Free Shipping</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <a href="#">Learn more </a>
          </div>
        </div>
        <div className="cotainer-list-aboutus">
          <div className="description-product">
            <div className="list-aboutus">
              <h1>3</h1>
              <h2>Best Quality</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <a href="#">Learn more </a>
            </div>
            <div className="list-aboutus">
              <h1>4</h1>
              <h2>Money Back Guaranty</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <a href="#">Learn more </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
