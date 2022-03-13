import { IResolvers } from "@graphql-tools/utils";
import { IZapato } from '../../../interfaces/IZapato';
import { Db } from 'mongodb';

const queryZapatoResolvers: IResolvers = {
    Query: {
        zapatoList: async(_: void, __:unknown, context: { db: Db }): Promise <Array<IZapato>> => { //<IZapato[]>
          const zapatos = await context.db.collection("zapatos").find().toArray() as Array<IZapato>;
          return zapatos;
        }
    }
}

export default queryZapatoResolvers;