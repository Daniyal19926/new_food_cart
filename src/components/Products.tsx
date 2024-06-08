import Product from "./Product";
interface IProduct {
  id: number;
  quantity: number;
}
interface Props {
  products: IProduct[];
  onDelete(id: number): void;
  onIncrement(id: number): void;
  onDecrement(id: number): void;
  onReset(): void;
}

export default function Products(props: Props) {
  return (
    <div>
      <button onClick={props.onReset} className="btn btn-primary m-2">
        Reset
      </button>
      {props.products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          quantity={product.quantity}
          onDelete={props.onDelete}
          onIncrement={props.onIncrement}
          onDecrement={props.onDecrement}
        />
      ))}
    </div>
  );
}
