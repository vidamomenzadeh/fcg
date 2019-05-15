import { gql } from "apollo-boost";
import {apolloClient} from "@queries/client";
function queries() {
    return {
        getTasks: (id) => {
            return apolloClient.query({
                query: gql`{tasks(carId:"${id}"){id}}`
            });
        }
    };
}

export default queries();
