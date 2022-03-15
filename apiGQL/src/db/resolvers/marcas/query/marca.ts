import { IResolvers } from "@graphql-tools/utils";
import { Imarcas } from '../../../interfaces/IMarcas';
import { Db } from 'mongodb';

const queryMarcaResolvers: IResolvers = {
    Query: {
        marca: async(_: void, args: {marca: string}, context: { db: Db }): Promise <Array<Imarcas>> => {
            const marcas = await context.db.collection("marcas").find( {marca: args.marca} ).toArray() as Array<Imarcas>;
            return marcas;
        }
    }
}

export default queryMarcaResolvers;

