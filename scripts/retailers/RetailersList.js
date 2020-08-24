import {getRetailers, useRetailers} from "./RetailersDataProvider.js"
import{retailersHTML} from "./RetailersHTML.js"

const contentTarget = document.querySelector(".retailersContainer")

export const retailersList = () => {
    getRetailers()
        .then(() => {
            const retailersArray = useRetailers()
            render(retailersArray)
        })
}

const render = (retailerArray) => {
    const allRetailersIntoHTML = retailerArray.map(
        retailer => {
            return retailersHTML(retailer)
        }
    ).join("")
contentTarget.innerHTML = allRetailersIntoHTML
}