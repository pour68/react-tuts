const ShoppingCart = () => {
  const shoppingCart = [
    {
      id: 1,
      image: "",
      name: "xbox series s",
      price: 300,
      count: 2,
    },
    {
      id: 2,
      image: "",
      name: "shampoo",
      price: 5.5,
      count: 5,
    },
    {
      id: 3,
      image: "",
      name: "halogen lamp",
      price: 2.5,
      count: 1,
    },
  ];

  const calculatePayment = () => {
    return shoppingCart.reduce((total, item) => {
      total += item.count * item.price;
      return total;
    }, 0);
  };

  return (
    <div>
      <button className="btn btn-primary p-2">Reset</button>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Count</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {shoppingCart.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.image}</td>
                <th>{item.name}</th>
                <td>
                  <button className="btn btn-sm btn-danger">-</button>
                  &nbsp; {item.count} &nbsp;
                  <button className="btn btn-sm  btn-success">+</button>
                </td>
                <td>
                  {item.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "EUR",
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4">
              Total Price:
              {calculatePayment().toLocaleString("en-US", {
                style: "currency",
                currency: "EUR",
              })}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ShoppingCart;
