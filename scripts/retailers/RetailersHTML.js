export const retailersHTML = (retailerObj, distributorOb) => {
    return `
    <section class="retailer">
        <h2 class="retailer--name"> ${retailerObj.name} <h2>
        <div class="retailer--address">${retailerObj.address} </div>
        <div class="retailer--cityState">${retailerObj.city}, ${retailerObj.state} </div>
        <div class="retailer--distributor">Distributors: ${distributorOb.name} </div>
        
        
    </section>
    `
}