import { gql } from "apollo-boost";
import {apolloClient} from "@queries/client";
import {carId} from "@constants";
function queries() {
    return {
        getTasks: (carId) => {
            return apolloClient.query({
                query: gql`{tasks(carId:"${carId}"){id,taskType,comment,completed}}`
            });
        },
        createTask: (carId, task) => {
            return apolloClient .mutate({
                mutation: gql`mutation {
                    createTask(
                        carId:"${carId}",
                        task: {comment : "${task.comment}", taskType:${task.taskType}})
                }`
            })
        },
        updateTask:(id, completed)=>{
            return apolloClient .mutate({
                mutation: gql`mutation {
                updateTask(
                    id: "${id}"
                    completed: ${completed}
               ){id}
            }`
            })
        }


    };
}

export default queries();
