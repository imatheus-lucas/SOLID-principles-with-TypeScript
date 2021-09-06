export default class Item {
  category: string;
  description: string;
  price: number;
  constructor(category: string, description: string, price: number) {
    this.category = category;
    this.description = description;
    this.price = price;
  }

  calculateTax(): number {
    if (this.category === "Coffee") {
      return (this.price * this.getTax()) / 100;
    }
    if (this.category === "Tea") {
      return (this.price * this.getTax()) / 100;
    }
    return 0;
  }
}
