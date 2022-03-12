import { IClient } from '../../../interfaces/IClient';
import { IResolvers } from "@graphql-tools/utils";
import { IZapato } from '../../../interfaces/IZapato';

import { Db } from 'mongodb';

const typeZapatosClientResolvers : IResolvers = {
    Client: {
        Zapatos: async(root: IClient, __ , context: {db:Db} ): Promise<IZapato[]> => {
            let zapatos: IZapato[]=[];

            for (let idzapato of root.shoes){
                let dbzapato = await context.db.collection("zapatos").findOne({id: idzapato })
                    .then (data => {
                        return data as IZapato;
                    })
                zapatos.push(dbzapato as IZapato);
            }

            return zapatos;
        }
    }
}

export default typeZapatosClientResolvers ;