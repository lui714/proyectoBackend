import { IResult } from '../../../interfaces/IResult';
import { IResolvers } from "@graphql-tools/utils";
import { IMarca } from '../../../interfaces/IMarca';

import { Db } from 'mongodb';

const queryZapatoIDResolvers: IResolvers = {
    Query: {
        marcaId: async(_: void, args: {idm: string}, context: { db: Db }): Promise <IResult> => {
          return await context.db.collection("marcas").findOne( {idm: args.idm} )
            .then( (marcaDocument) => {
              console.log(marcaDocument);
              return {
                status: true,
                message: "Marca encontrada",
                data: marcaDocument as IMarca
              }
            })
            .catch( (error) => {
              console.log (error);
              return {
                status: false,
                message: "Marca no encontrado",
              }
            })
        }
    }
}

export default queryZapatoIDResolvers;