let retailers = []

export const useRetailers = () => {
    return retailers.slice()
}

export const getRetailers = () => {
    return fetch("http://localhost:8088/retailers")
        .then(response => response.json())
        .then(data => {
            retailers = data
        })
}