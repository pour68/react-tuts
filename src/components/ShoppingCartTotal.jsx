const ShoppingCartTotal = ({ calculatePayment }) => {
  return (
    <tr>
      <td colSpan="4">
        Total Price:
        {calculatePayment()}
      </td>
    </tr>
  );
};

export default ShoppingCartTotal;
