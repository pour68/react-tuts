import "./App.css";
import Valuetype from "./components/Valuetype";
import Refrencetype from "./components/Refrencetype";
import ShoppingCart from "./components/shoppingCart";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      {/* <Valuetype />
      <Refrencetype /> */}

      <div className="container">
        <ShoppingCart />
      </div>
    </>
  );
}

export default App;
