import Item from "./Item";
import TaxItem from "./TaxItem";
import fs from "fs/promises";
import MessageData from "./MessageData";
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
    // if (language == "en") {
    //   return `Total was $${this.getTotal()}, taxes were $${this.getTaxes()}. Thanks for purchasing!`;
    // }
    // if (language == "pt") {
    //   return `O total foi de R$${this.getTotal()}, os imposots foram de R$${this.getTaxes()}. Obrigado pela compra!`;
    // }
  }
}
