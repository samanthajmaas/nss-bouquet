export const flowerHTML = (flowerObj) => {
    return `
    <section class="flower">
        <h2 class="flower--name"> ${flowerObj.type} <h2>
        <div class="flower--color">${flowerObj.color} </div>
    </section>
    `
}