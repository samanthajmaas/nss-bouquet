export const retailersHTML = (retailerObj, distributorOb, nurseriesArr, flowersArr) => {
    return `
    <section class="retailer">
        <h2 class="retailer--name"> ${retailerObj.name} </h2>
        <div class="retailer--address">${retailerObj.address} </div>
        <div class="retailer--cityState">${retailerObj.city}, ${retailerObj.state} </div>
        <h3 class="retailer--distributor">Distributor: ${distributorOb.name} </h3>
        <section class="distributor--nurseries">
            This distributor has purchased from the following nurseries:
            <ul>
                ${
                    nurseriesArr.map(nursery => `<li>${nursery.name}</li>`).join("")
                }
            </ul>
        </section>
        <section class="flowersToSell">
            Available flowers to sell:
            <ul>
                ${
                    flowersArr.map(flower => `<li>${flower.type}</li>`).join("")
                }
            </ul>
        </section>
    </section>
    `
}