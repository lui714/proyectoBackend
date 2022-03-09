import { IResolvers } from "@graphql-tools/utils";
import { IMarcas } from '../../../interfaces/IMarcas';
import { Db } from 'mongodb';

const queryMarcaResolvers: IResolvers = {
    Query: {
        marca: async(_: void, args: {marca: string}, context: { db: Db }): Promise <Array<IMarcas>> => {
            const marcas = await context.db.collection("marcas").find( {marca: args.marca} ).toArray() as Array<IMarcas>;
            return marcas;
        }
    }
}

export default queryMarcaResolvers;


