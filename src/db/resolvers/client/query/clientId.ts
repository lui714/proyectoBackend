import { IClient } from '../../../interfaces/IClient';
import { IResult } from '../../../interfaces/IResult';
import { IResolvers } from "@graphql-tools/utils";
import { Db } from 'mongodb';

const queryClientResolvers: IResolvers = {
    Query: {
        clientId: async (_:void, args: {id: string}, context: { db: Db }  ): Promise <IResult> => {
            return await context.db.collection("client").findOne({ id: args.id })
                .then ( (clientDocument) => {
                    return {
                        status: true,
                        message: "Cliente encontrado",
                        data: clientDocument as IClient
                      }
                })
                .catch ( (error) => {
                    return {
                        status: false,
                        message: "Cliente no encontrado",
                      }
                })

        } 
    }
}

export default queryClientResolvers;