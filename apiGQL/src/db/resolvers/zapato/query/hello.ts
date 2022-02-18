import { IResolvers } from "@graphql-tools/utils";
import { IZapato } from '../../../interfaces/IZapato';
import { Db } from 'mongodb';

const queryZapatoResolvers: IResolvers = {
    Query: {
        hello: () => {
           return "Hola Mundo desde GraphQL"
        }
    }
}

export default queryZapatoResolvers;