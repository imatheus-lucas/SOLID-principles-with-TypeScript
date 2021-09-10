import MessageData from "./MessageData";

import fs from "fs/promises";

export default class MessageDataFile implements MessageData {
  async read(language: string): Promise<string> {
    const message = await fs.readFile(`./message/${language}.txt`, "utf-8");
    return message;
  }
}
