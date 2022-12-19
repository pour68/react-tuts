const ShoppingCartItem = ({ item, decreaseCount, increaseCount }) => {
  return (
    <tr>
      <td>
        <img src={item.image} alt={item.name} width="64" />
      </td>
      <th>{item.name}</th>
      <td>
        <button className="btn btn-sm btn-danger" onClick={() => decreaseCount(item.id)}>
          -
        </button>
        &nbsp; {item.count} &nbsp;
        <button className="btn btn-sm  btn-success" onClick={() => increaseCount(item.id)}>
          +
        </button>
      </td>
      <td>{item.price * item.count}</td>
    </tr>
  );
};

export default ShoppingCartItem;
