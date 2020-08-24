import {getFlowers, useFlowers} from "./FlowerDataProvider.js"
import {flowerHTML} from "./FlowerHTML.js"

const contentTarget = document.querySelector(".flowersContainer")

export const flowerList = () => {
    getFlowers()
        .then(() => {
            const flowersArray = useFlowers()
            render(flowersArray)
        })
}

const render = (flowerArray) => {
    const allFlowersIntoHTML = flowerArray.map(
        flower => {
            return flowerHTML(flower)
        }
    ).join("")
contentTarget.innerHTML = allFlowersIntoHTML
}