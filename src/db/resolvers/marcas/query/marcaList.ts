import { IResolvers } from "@graphql-tools/utils";
import { IMarca } from '../../../interfaces/IMarca';
import { Db } from 'mongodb';

const queryZapatoResolvers: IResolvers = {
    Query: {
        marcasList: async(_: void, __:unknown, context: { db: Db }): Promise <Array<IMarca>> => { //<IZapato[]>
          const marcas = await context.db.collection("marcas").find().toArray() as Array<IMarca>;
          return marcas;  
        }
    }
}
export default queryZapatoResolvers;
//distinct("marca",{key: "marca"});
//find({ "marca": String }).toArray() as Array<IZapato>;