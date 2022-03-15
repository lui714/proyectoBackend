import { IResolvers } from "@graphql-tools/utils";
import { Db } from 'mongodb';
import { IZapato } from "../../../interfaces/IZapato";

const queryzapatoMarcaResolvers: IResolvers = {
    Query: {
        marcaId: async(_: void, args: {idm: string}, context: { db: Db }): Promise <Array<IZapato>> => {
            const zapatos = await context.db.collection("zapatos").find( {idm: args.idm} ).toArray() as Array<IZapato>;
            return zapatos;
        }
    }
}

export default queryzapatoMarcaResolvers;


