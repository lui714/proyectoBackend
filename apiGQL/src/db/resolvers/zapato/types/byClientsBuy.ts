/*import { IResolvers } from '@graphql-tools/utils';
import { Db } from 'mongodb';
import { IZapato } from './../../../interfaces/IZapato';
import { IClient } from './../../../interfaces/IClient';
import { IResult } from './../../../interfaces/IResult';

const typeByClientsBuy: IResolvers = {
    Book: {
        byClientsBuy: async ( root: IZapato, __, context: {db: Db} ): Promise<IClient[]> => {
            //extrea de MongoDB todos los clients
            const dataClients = await context.db.collection("client").find().toArray() as IClient[];
            //se filtra dataClients, en cada interacción se examina si en los books de ese client se encuentra el id de nuestro book
            const clientList = dataClients.filter( (client) => client.Zapatos.indexOf(root.id) > -1 );
            return clientList;
        }
    }
}

export default typeByClientsBuy;*/