export const retailersHTML = (retailerObj) => {
    return `
    <section class="retailer">
        <h2 class="retailer--name"> ${retailerObj.name} <h2>
        <div class="retailer--address">${retailerObj.address} </div>
        <div class="retailer--city">${retailerObj.city} </div>
        <div class="retailer--state">${retailerObj.state} </div>
    </section>
    `
}