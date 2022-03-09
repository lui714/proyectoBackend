import { IResult } from '../../../interfaces/IResult';
import { IResolvers } from "@graphql-tools/utils";
import { Db } from 'mongodb';

const mutationDeleteZapatoResolvers: IResolvers = {
    Mutation: {
        deleteZapato: async(_: void, args: {id: string}, context: { db: Db }): Promise <IResult> => {
            const dataResult = await context.db.collection("zapatos").findOneAndDelete( {id: args.id} )
                .then( (data) => {
                    console.log(data);
                    return {
                        status: true,
                        message: "zapato borrado con éxito",
                    }
                }).catch ( (error) => {
                    console.log(error);
                    return { 
                        status: false,
                        message: "zapato no encontrado",
                    }
                })
            return dataResult;
        }

    }

}
export default mutationDeleteZapatoResolvers;