import { getRetailers, useRetailers } from "./RetailersDataProvider.js"
import { retailersHTML } from "./RetailersHTML.js"
import { getDistributors, useDistributors } from "../distributors/DistributorsDataProvider.js"

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
        .then(() => {
            const distributors = useDistributors()

            const allRetailersIntoHTML = retailerArray.map(
                retailer => {
                    const foundDistributor = distributors.find(distributor => distributor.id === retailer.distrubtorId)
                    return retailersHTML(retailer, foundDistributor)
                }
            ).join("")
            contentTarget.innerHTML = allRetailersIntoHTML
        })

}