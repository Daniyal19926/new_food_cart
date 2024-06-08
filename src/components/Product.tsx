interface Porps {
  id: number;
  quantity: number;
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
    <div className="p-3">
      <span className={badgeClasses}>{badgeText}</span>
      <button onClick={() => onIncrement(id)} className="btn btn-secondary m-2">
        +
      </button>
      <button
        onClick={() => onDecrement(id)}
        className="btn btn-secondary me-2"
      >
        -
      </button>
      <button onClick={() => onDelete(id)} className="btn btn-danger">
        x
      </button>
    </div>
  );
}
