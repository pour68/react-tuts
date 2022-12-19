import { useState } from "react";
import ShoppingCartHead from "./ShoppingCartHead";
import ShoppingCartItem from "./ShoppingCartItem";
import ShoppingCartTotal from "./ShoppingCartTotal";
import getShoppingCart from "../../services/shoppingCart";

const ShoppingCart = () => {
  // step 2: useState hook to manage data
  const [shoppingCart, setShoppingCart] = useState(getShoppingCart());

  // step 5: define calculate payment
  const calculatePayment = () => {
    const totalPayment = shoppingCart.reduce((total, item) => {
      total += item.count * item.price;

      return total;
    }, 0);

    return totalPayment;
  };

  // step 4: define increase count
  const increaseCount = (id) => {
    const product = shoppingCart.find((item) => item.id === id);

    const updateShoppingCart = shoppingCart.map((item) => {
      if (item.id === id) return { ...item, count: product.count + 1 };

      return item;
    });

    setShoppingCart(updateShoppingCart);
  };

  // step 4: define decrease count
  const decreaseCount = (id) => {
    const product = shoppingCart.find((item) => item.id === id);

    const updateShoppingCart = shoppingCart.map((item) => {
      if (item.id === id) return { ...item, count: product.count <= 0 ? 0 : product.count - 1 };

      return item;
    });

    setShoppingCart(updateShoppingCart);
  };

  // step 5: define reset items
  const resetItems = () => {
    const updateShoppingCart = shoppingCart.map((item) => {
      return { ...item, count: 0 };
    });

    setShoppingCart(updateShoppingCart);
  };

  // step 3: create UI
  return (
    <div>
      <button className="btn btn-primary p-2" onClick={resetItems}>
        Reset
      </button>

      <table className="table table-striped">
        <thead>
          <ShoppingCartHead />
        </thead>
        <tbody>
          {shoppingCart.map((item) => {
            return (
              <ShoppingCartItem
                key={item.id}
                item={item}
                decreaseCount={decreaseCount}
                increaseCount={increaseCount}
              />
            );
          })}
        </tbody>
        <tfoot>
          <ShoppingCartTotal calculatePayment={calculatePayment} />
        </tfoot>
      </table>
    </div>
  );
};

export default ShoppingCart;
