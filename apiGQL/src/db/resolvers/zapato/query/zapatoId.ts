import { IResult } from '../../../interfaces/IResult';
import { IResolvers } from "@graphql-tools/utils";
import { IZapato } from '../../../interfaces/IZapato';

import { Db } from 'mongodb';

const queryZapatoResolvers: IResolvers = {
    Query: {
        zapatoId: async(_: void, args: {id: string}, context: { db: Db }): Promise <IResult> => {
          return await context.db.collection("zapatos").findOne( {id: args.id} )
            .then( (zapatoDocument) => {
              console.log(zapatoDocument);
              return {
                status: true,
                message: "Zapato encontrado",
                data: zapatoDocument as IZapato
              }
            })
            .catch( (error) => {
              console.log (error);
              return {
                status: false,
                message: "Zapato no encontrado",
              }
            })
        }
    }
}

export default queryZapatoResolvers;