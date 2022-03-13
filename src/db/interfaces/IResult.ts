import { IClient } from './IClient';
import { IZapato } from "./IZapato";
import { IMarca } from "./IMarca";

export interface IResult {
    status: boolean;
    message: string;
    data?: DataDB;
}

type DataDB =
    | IZapato
    | IClient
    | IMarca
    | null
    | undefined ;

