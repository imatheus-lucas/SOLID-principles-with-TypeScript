import Order from "./Order";
import Item from "./Item";
describe("Orders", function () {
  it(" should create an order and calculate the total.", function () {
    const order = new Order();

    order.addItem(new Item("Coffee", "Cappucino", 10));
    order.addItem(new Item("Tea", "Black Tea", 12));

    const total = order.getTotal();

    expect(total).toBe(22);
  });

  it(" should create an order and calculate taxes.", function () {
    const order = new Order();

    order.addItem(new Item("Coffee", "Cappucino", 10)); //10%
    order.addItem(new Item("Tea", "Black Tea", 10)); //20%

    const taxes = order.getTaxes();

    expect(taxes).toBe(3);
  });
});
