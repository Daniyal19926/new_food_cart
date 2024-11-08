import Product from "./Product";
import { IProduct } from "../types";
interface Props {
  products: IProduct[];
  onDelete(id: number): void;
  onIncrement(id: number): void;
  onDecrement(id: number): void;
  onReset(): void;
}

export default function Products({
  products,
  onDelete,
  onIncrement,
  onDecrement,
  onReset,
}: Props) {
  return (
    <div>
      <button onClick={onReset} className="btn btn-primary m-2">
        Reset
      </button>
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          quantity={product.quantity}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      ))}
    </div>
  );
}
