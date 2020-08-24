let nurseryFlowers = []

export const useNurseryFlowers = () => {
    return nurseryFlowers.slice()
}

export const getNurseryFlowers = () => {
    return fetch("http://localhost:8088/NurseryFlowers")
        .then(response => response.json())
        .then(data => {
            nurseryFlowers = data
        })
}