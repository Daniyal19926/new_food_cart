import { IProduct } from "../types";

interface Porps extends IProduct {
  onDelete(id: number): void;
  onIncrement(id: number): void;
  onDecrement(id: number): void;
}

export default function Product({
  id,
  quantity,
  onDelete,
  onIncrement,
  onDecrement,
}: Porps) {
  let badgeClasses = "m-2 badge text-bg-";
  badgeClasses += quantity === 0 ? "warning" : "primary";
  const badgeText = quantity === 0 ? "zero" : quantity;
  return (
    <div className="p-2">
      <div className="row">
        <div className="col">
          <span className={badgeClasses}>{badgeText}</span>
        </div>
        <div className="col-10">
          <button
            onClick={() => onIncrement(id)}
            className="btn btn-secondary m-2"
          >
            +
          </button>
          <button
            disabled={quantity === 0}
            onClick={() => onDecrement(id)}
            className="btn btn-secondary me-2"
          >
            -
          </button>
          <button onClick={() => onDelete(id)} className="btn btn-danger">
            X
          </button>
        </div>
      </div>
    </div>
  );
}
