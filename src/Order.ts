import Item from "./Item";

export default class Order {
  items: Item[];
  constructor() {
    this.items = [];
  }

  addItem(item: Item) {
    this.items.push(item);
  }

  getTotal(): number {
    let total = 0;
    for (let item of this.items) {
      total += item.price;
    }
    return total;
  }

  getTaxes(): number {
    let taxes = 0;
    for (let item of this.items) {
      taxes += item.calculateTax();
    }
    return taxes;
  }
}
