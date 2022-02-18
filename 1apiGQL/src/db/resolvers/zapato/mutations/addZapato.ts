import { IResult } from '../../../interfaces/IResult';
import { IResolvers } from "@graphql-tools/utils";
import { IZapato } from '../../../interfaces/IZapato';

import { Db } from 'mongodb';

const mutationAddZapatoResolvers: IResolvers = {
    Mutation: {
        addZapato: async(_: void, args: {zapato: IZapato}, context: { db: Db }): Promise <IResult> => {
            const dataResult = await context.db.collection("zapatos").insertOne(args.zapato)
                .then( (data) => {
                    console.log(data);
                    return {
                        status: true,
                        message: "usuario insertado con éxito",
                        data: args.zapato
                    }
                })
                .catch ( (error) => {
                    return { 
                        status: false,
                        message: `Error: ${error}`
                    }
                })
            return dataResult;
        }
        
    }

}

export default mutationAddZapatoResolvers;
