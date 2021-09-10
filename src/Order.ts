import Item from "./Item";
import TaxItem from "./TaxItem";
import fs from "fs/promises";
import MessageData from "./IMessageData";
export default class Order {
  items: Item[];
  messageData: MessageData;
  constructor(messageData: MessageData) {
    this.items = [];
    this.messageData = messageData;
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
      if (item instanceof TaxItem) {
        taxes += item.calculateTax();
      }
    }
    return taxes;
  }

  async printMessage(language: string) {
    const message = await this.messageData.read(language);
    return message
      .replace("{total}", this.getTotal().toString())
      .replace("{taxes}", this.getTaxes().toString());
  }
}
