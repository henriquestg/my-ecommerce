import { Button } from "../Button";
import { ProductList } from "../ProductList";
import "./styles.scss";

interface FeaturedProps {
  title: string;
  text: string;
}

export function FeaturedProducts({ title, text }: FeaturedProps) {
  return (
    <div className="container-featured">
      <h1>{title}</h1>
      <div className="title-featured">
        <p>{text}</p>
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
