import { IResolvers } from "@graphql-tools/utils";
import { Imarcas } from '../../../interfaces/IMarcas';
import { Db } from 'mongodb';

const queryZapatoResolvers: IResolvers = {
    Query: {
        marcasList: async(_: void, __:unknown, context: { db: Db }): Promise <Array<Imarcas>> => { //<IZapato[]>
          const marcas = await context.db.collection("marcas").find().toArray() as Array<Imarcas>;
          return marcas;  
        }
    }
}
export default queryZapatoResolvers;
//distinct("marca",{key: "marca"});
//find({ "marca": String }).toArray() as Array<IZapato>;