import Item from "./Item";
export default class Electronics extends Item {
  constructor(description: string, price: number) {
    super("Electronics", description, price);
  }
}
