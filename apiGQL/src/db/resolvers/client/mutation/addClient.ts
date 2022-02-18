import { IResolvers } from '@graphql-tools/utils';
import { IResult } from '../../../interfaces/IResult';
import { IClient } from '../../../interfaces/IClient';
import { Db } from 'mongodb';

const mutationAddClientResolvers: IResolvers = {
    Mutation: {
        addClient: async(_: void, args: {Client: IClient}, context: { db: Db }): Promise <IResult> => {
            const dataClient = await context.db.collection("client").insertOne(args.Client)
                .then( (data) => {
                    console.log(data);
                    return {
                        status: true,
                        message: "client insertado con éxito",
                    }
                }).catch ( (error) => {
                    return {
                        status: false,
                        message: `Error: ${error}`,
                    }
                });
            return dataClient;
        }
    }
}

export default mutationAddClientResolvers;