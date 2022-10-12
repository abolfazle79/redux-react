import logo from "./logo.svg";
import "./App.css";
import { ProductList } from "./view/Product/ProductList";
import { ProductAdd } from "./view/Product/ProductAdd";
import { Counter } from "./view/Counter";
import { ReactUploader } from "./FileUploaders/React-uploader";
function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <ProductList />
      <hr />
      <ProductAdd />
      <ReactUploader />
    </div>
  );
}

export default App;
