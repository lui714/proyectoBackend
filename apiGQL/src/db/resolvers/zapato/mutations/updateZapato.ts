import { Db } from 'mongodb';
import { IZapato } from '../../../interfaces/IZapato';
import { IResult } from '../../../interfaces/IResult';
import { IResolvers } from '@graphql-tools/utils';


const mutationUpdateZapatosResolvers: IResolvers = {
    Mutation: {
        updateZapato: async(_: void, args: {id: string, Zapato: IZapato}, context: { db: Db }): Promise <IResult> => {
            const dataResult =  await context.db.collection("zapatos").findOneAndUpdate( {id: args.id}, {$set: args.Zapato})
                .then( (data) => {
                    console.log(data);
                    return {
                        status: true,
                        message: "Zapato actualizado",
                    }
                })
                .catch( (error) => {
                    console.log (error);
                    return {
                        status: false,
                        message: "Zapato no encontrado",
                    }
                })
            return dataResult;
        }
    }

}

export default mutationUpdateZapatosResolvers;