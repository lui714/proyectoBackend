import { IResolvers } from "@graphql-tools/utils";

const queryZapatoResolvers: IResolvers = {
    Query: {
        hello: () => {
           return "Hola Mundo desde GraphQL"
        }
    }
}

export default queryZapatoResolvers;