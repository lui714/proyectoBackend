import { IClient } from '../../../interfaces/IClient';
import { IResolvers } from '@graphql-tools/utils';
import { Db } from 'mongodb';

const queryClientResolvers: IResolvers = {
    Query: {
        clientList: async (_:void, __unknown, context: {db: Db}): Promise<IClient[]> => {
            const clients = await context.db.collection("client").find().toArray() as IClient[];
            return clients;
        }
    }
}

export default queryClientResolvers;