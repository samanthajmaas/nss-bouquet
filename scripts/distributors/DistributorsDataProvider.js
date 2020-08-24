let distributors = []

export const useDistributors = () => {
    return distributors.slice()
}

export const getDistributors = () => {
    return fetch("http://localhost:8088/distributors")
        .then(response => response.json())
        .then(data => {
            distributors = data
        })
}