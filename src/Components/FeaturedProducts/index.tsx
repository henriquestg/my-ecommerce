import { Button } from "../Button";
import { ProductList } from "../ProductList";
import "./styles.scss";

export function FeaturedProducts() {
  return (
    <div className="container-featured">
      <h1>Featured Products</h1>
      <div className="title-featured">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <Button text="View all" />
      </div>
      <div className="product-list">
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
      </div>
    </div>
  );
}
