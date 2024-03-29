import { IZapato } from "./IZapato";

export interface IClient {
    _id?: any;
    id: string;
    name: string;
    email: string;
    website?: string;
    github?: string;
    twitter?: string;
    Zapatos: Array<IZapato>;
  }