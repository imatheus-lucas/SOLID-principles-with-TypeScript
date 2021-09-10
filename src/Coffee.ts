import TaxItem from "./TaxItem";
export default class Coffee extends TaxItem {
  constructor(description: string, price: number) {
    super("Coffee", description, price);
  }
  getTax(): number {
    return 10;
  }
}
