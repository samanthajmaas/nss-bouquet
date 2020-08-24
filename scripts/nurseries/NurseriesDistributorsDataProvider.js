let distributorsNurseries = []

export const useDistributorsNurseries = () => {
    return distributorsNurseries.slice()
}

export const getDistributorsNurseries = () => {
    return fetch("http://localhost:8088/DistributorsNurseries")
        .then(response => response.json())
        .then(data => {
            distributorsNurseries = data
        })
}