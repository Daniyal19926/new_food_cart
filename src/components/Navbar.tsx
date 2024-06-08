interface IProduct {
  id: number;
  quantity: number;
}
interface Props {
  products: IProduct[];
}
export default function Navbar(props: Props) {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          Cart{" "}
          <span className="badge text-bg-secondary">
            {props.products.length}
          </span>
        </span>
      </div>
    </nav>
  );
}
