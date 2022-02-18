import { IClient } from './IClient';
import { IZapato } from "./IZapato";

export interface IResult {
    status: boolean;
    message: string;
    data?: DataDB;
}

type DataDB =
    | IZapato
    | IClient
    | null
    | undefined ;

