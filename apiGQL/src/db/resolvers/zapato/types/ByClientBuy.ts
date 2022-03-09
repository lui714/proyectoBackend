import { IResolvers } from '@graphql-tools/utils';
import { Db } from 'mongodb';
import { IZapato } from './../../../interfaces/IZapato';
import { IClient } from './../../../interfaces/IClient';

const typeByClientBuy: IResolvers = {
    Zapato: {
        byclientbuy: async ( root: IZapato, __, context: {db: Db} ): Promise<IClient[]> => {
            //extrea de MongoDB todos los peoples
            const dataClient = await context.db.collection("client").find().toArray() as IClient[];
            //se filtra dataPeoples, en cada interacción se examina si en los books de ese people se encuentra el id de nuestro book
            const clientList = dataClient.filter( (Client) => Client.shoes.indexOf(root.id) > 1 );
            return clientList;
        }
    }
}
export default typeByClientBuy;