import { IZapato } from '../../../interfaces/IZapato';
import { IResolvers } from "@graphql-tools/utils";
import { IMarca } from '../../../interfaces/IMarca';

import { Db } from 'mongodb';

const typezapatomarcaResolvers : IResolvers = {
    Zapato: {
        idm: async(root:IZapato, __ , context: {db:Db} ): Promise<IMarca[]> => {
            let marca: IMarca[]=[];

            for (let idmarca of root.idm){
                let dbmarca = await context.db.collection("marcas").findOne({id: idmarca })
                    .then (data => {
                        return data as IMarca;
                    })
                marca.push(dbmarca as IMarca);
            }

            return marca;
        }
    }
}

export default typezapatomarcaResolvers ;