import Navbar from "./components/Navbar";
import Product from "./components/Product";

export default function App(): React.ReactElement {
  return (
    <div>
      <Navbar />
      <button className="btn btn-primary m-3">Reset</button>
      <Product />
    </div>
  );
}
