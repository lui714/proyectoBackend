import { IClient } from '../../../interfaces/IClient';
import { IResolvers } from "@graphql-tools/utils";

const typesClientResolvers: IResolvers = {
    Client :{
        github: (root: IClient) => {
            return root.github === undefined
            ? "NO TIENES NPI"
            : `https://github.com/${root.github}`;
        },
        website: (root: { website: string }) => {
            return root.website === undefined ? "" : `http://www.${root.website}`;
        },
        twitter: (root: { twitter: string }) => {
            return root.twitter === undefined
              ? ""
              : `https://twitter.com/${root.twitter}`;
        },
    }
    
}

export default typesClientResolvers ;