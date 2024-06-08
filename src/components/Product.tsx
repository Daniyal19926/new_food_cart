interface Porps {
  id: number;
  quantity: number;
  onDelete(id: number): void;
  onIncrement(id: number): void;
  onDecrement(id: number): void;
}

export default function Product(props: Porps) {
  let badgeClasses = "m-2 badge text-bg-";
  badgeClasses += props.quantity === 0 ? "warning" : "primary";
  const badgeText = props.quantity === 0 ? "zero" : props.quantity;
  return (
    <div className="p-3">
      <span className={badgeClasses}>{badgeText}</span>
      <button
        onClick={() => props.onIncrement(props.id)}
        className="btn btn-secondary m-2"
      >
        +
      </button>
      <button
        onClick={() => props.onDecrement(props.id)}
        className="btn btn-secondary me-2"
      >
        -
      </button>
      <button
        onClick={() => props.onDelete(props.id)}
        className="btn btn-danger"
      >
        x
      </button>
    </div>
  );
}
