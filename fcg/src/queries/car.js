import { gql } from "apollo-boost";
import {apolloClient} from "@queries/client";
function queries() {
    return {
        getCar: (id) => {
            return apolloClient.query({
                query: gql`{car(id:${id}){id}}`
            });
        }
    };
}

export default queries();
