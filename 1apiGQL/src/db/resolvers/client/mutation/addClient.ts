import { IResolvers } from '@graphql-tools/utils';
import { IResult } from '../../../interfaces/IResult';
import { IClient } from '../../../interfaces/IClient';
import { Db } from 'mongodb';

const mutationAddClientResolvers: IResolvers = {
    Mutation: {
        addClient: async(_:void, args: { client: IClient}, context: { db: Db } ): Promise <IResult> => {
            const dataClient = await context.db.collection("client").insertOne(args.client)
                .then( (data) => {
                    return {
                        status: true,
                        message: "client insertado con éxito",
                        data: args.client
                    }
                }).catch( (error) => {
                    return {
                        status: false,
                        message: `Error: ${error}`,
                        data: null
                    }
                });
            return dataClient;
        }
    }
}

export default mutationAddClientResolvers;