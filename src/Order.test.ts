import Order from "./Order";
import Coffee from "./Coffee";
import Tea from "./Tea";
import Electonics from "./Electronics";
import MessageDataFile from "./MessageDataFile";
describe("Orders", function () {
  it(" should create an order and calculate the total.", function () {
    const order = new Order(new MessageDataFile());

    order.addItem(new Coffee("Cappucino", 10));
    order.addItem(new Tea("Black Tea", 12));

    const total = order.getTotal();

    expect(total).toBe(22);
  });

  it(" should create an order and calculate taxes.", function () {
    const order = new Order(new MessageDataFile());

    order.addItem(new Coffee("Cappucino", 10)); //10%
    order.addItem(new Tea("Black Tea", 10)); //10%
    order.addItem(new Electonics("TV", 25)); //10%
    const taxes = order.getTaxes();

    expect(taxes).toBe(2);
  });

  it("must calculate the order and print a message in english", async function () {
    const order = new Order(new MessageDataFile());

    order.addItem(new Coffee("Cappucino", 10)); //10%
    order.addItem(new Tea("Black Tea", 10)); //10%
    order.addItem(new Electonics("TV", 25)); //10%
    const message = await order.printMessage("en");

    expect(message).toBe(
      "Total was R$45, taxes were R$2. Thanks for purchasing!"
    );
  });
  it("must calculate the order and print a message in portuguese", async function () {
    const order = new Order(new MessageDataFile());

    order.addItem(new Coffee("Cappucino", 10)); //10%
    order.addItem(new Tea("Black Tea", 10)); //10%
    order.addItem(new Electonics("TV", 25)); //10%
    const message = await order.printMessage("pt");

    expect(message).toBe(
      "O total foi de R$45, os imposots foram de R$2. Obrigado pela compra!"
    );
  });
});
