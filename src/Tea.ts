import TaxItem from "./TaxItem";
export default class Tea extends TaxItem {
  constructor(description: string, price: number) {
    super("Tea", description, price);
  }

  getTax(): number {
    return 10;
  }
}
