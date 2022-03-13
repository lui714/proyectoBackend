import { IZapato } from "./IZapato";

export interface IMarca {
    _id?: any;
    idm: string;
    marca: string;
    zapato: Array<IZapato>
}