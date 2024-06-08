import { IProduct } from "../types";

interface Props {
  products: IProduct[];
}
export default function Navbar({ products }: Props) {
  const newList = products.filter((product) => product.quantity !== 0);

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          Cart <span className="badge text-bg-secondary">{newList.length}</span>
        </span>
      </div>
    </nav>
  );
}
