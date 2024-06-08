interface Props {
  productsCount: number;
}
export default function Navbar({ productsCount }: Props) {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          Cart <span className="badge text-bg-secondary">{productsCount}</span>
        </span>
      </div>
    </nav>
  );
}
