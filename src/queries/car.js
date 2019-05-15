import { gql } from "apollo-boost";
import {apolloClient} from "@queries/client";
import {carId} from "@constants";
function queries() {
    return {
        getCar: (id) => {
            return apolloClient.query({
                query: gql`{car(id:"${id}"){
                                id,
                                make,
                                model,
                                trim,
                                engineType,
                                physicalStatus,
                                legalStatus,
                                sellingStatus,
                                financialDetails{purchasePrice,
                                purchaseDate, 
                                purchaseLocation, 
                                paymentDonePercentage,
                                sellingPrice,
                                sellingDate,
                                sellingLocation,
                                sellingDonePercentage}}}`
            });
        },

        updateCar: (car) => {
            return apolloClient.mutate({
                mutation: gql`mutation {                 
                               updateCar(car:{
                                id:"${carId}", 
                                physicalStatus:${car.physicalStatus}, 
                                sellingStatus:${car.sellingStatus}, 
                                make:"${car.make}",
                                model:"${car.model}",
                                trim:"${car.trim}",
                                engineType:${car.engineType},                               
                                legalStatus:${car.legalStatus}                                                      
                             })
                     {
                        id                        
                     }
                }`
            })
        },
        getModel: (make) => {
            return apolloClient.query({
                query: gql`{model(make:"${make}")}`
            })
        },
        getTrim: (payload) => {
            return apolloClient .query({
                query: gql`{trim(model:"${payload.model}", make:"${payload.make}")}`
            })
        }
    };
}

export default queries();
