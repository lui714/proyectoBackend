import { IResolvers } from '@graphql-tools/utils';
import { Db } from 'mongodb';
import { IMarca } from './../../../interfaces/IMarca'; // zapato
import { IZapato } from './../../../interfaces/IZapato'; //client

const typezapatoPorMarca: IResolvers = {
    marca: {
        zapatoPorMarca: async ( marca: IMarca, __, context: {db: Db} ): Promise<IZapato[]> => {
            //extrea de MongoDB todos los peoples
            const dataZapato = await context.db.collection("zapatos").find().toArray() as IZapato[];
            //se filtra dataPeoples, en cada interacción se examina si en los books de ese people se encuentra el id de nuestro book
            const marcaList = dataZapato.filter( (Zapato) => Zapato.idm.indexOf(marca.idm) > 1 );
            return marcaList;
        }
    }
}

export default typezapatoPorMarca;