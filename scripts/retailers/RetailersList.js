import { getRetailers, useRetailers } from "./RetailersDataProvider.js"
import { retailersHTML } from "./RetailersHTML.js"
import { getDistributors, useDistributors } from "../distributors/DistributorsDataProvider.js"
import {useDistributorsNurseries, getDistributorsNurseries} from "../nurseries/NurseriesDistributorsDataProvider.js"
import {useNurseryFlowers, getNurseryFlowers} from "../nurseries/NurseriesFlowersDataProvider.js"
import {useNurseries, getNurseries} from "../nurseries/NurseriesDataProvider.js"
import{getFlowers, useFlowers} from "../flowers/FlowerDataProvider.js"

const contentTarget = document.querySelector(".retailersContainer")

export const retailersList = () => {
    getRetailers()
        .then(() => {
            const retailersArray = useRetailers()
            render(retailersArray)
        })
}

const render = (retailerArray) => {
    getDistributors()
        .then(getNurseries)
        .then(getNurseryFlowers)
        .then(getDistributorsNurseries)
        .then(getFlowers)
        .then(() => {
            const distributors = useDistributors()
            const nurseries = useNurseries()
            const flowers = useFlowers()
            const distributorsNurseriesRelationships = useDistributorsNurseries()
            const nurseryFlowerRelationships = useNurseryFlowers()

            const allRetailersIntoHTML = retailerArray.map(
                (retailer) => {
                    const foundDistributor = distributors.find(distributor => distributor.id === retailer.distrubtorId)

                    let relatedNurseries = distributorsNurseriesRelationships.filter(dn => dn.distributorId === foundDistributor.id)

                    const nurseriesForDistributor = relatedNurseries.map(relationshipObj => {
                        const foundNurseries = nurseries.find(nursery => relationshipObj.nurseryid === nursery.id)
                        return foundNurseries
                    })

                    let relatedFlowers = nurseryFlowerRelationships.filter(nf => nf.nurseryId === nursery.id)

                    const flowersForNurseries = relatedFlowers.map(relationshipObject => {
                        const foundFlowers = flowers.find(flower => relationshipObject.flowerId === flower.id)
                        return foundFlowers
                    })



                    return retailersHTML(retailer, foundDistributor, foundNurseries, foundFlowers)
                }
            ).join("")
            contentTarget.innerHTML = allRetailersIntoHTML
        })

}