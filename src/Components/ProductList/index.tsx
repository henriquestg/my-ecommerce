import Image from "next/image";
import Table from "../../../public/Table.png";

import "./styles.scss";
import { Button } from "../Button";

export function ProductList() {
  return (
    <div className="container-product">
      <Image src={Table} alt="Table Imagem" width={304} height={304} />
      <div className="description-product">
        <h2>Round Dining Table</h2>
        <p>$55</p>
      </div>
      <p>Bed table</p>
      <Button text="Add to cart" />
    </div>
  );
}
