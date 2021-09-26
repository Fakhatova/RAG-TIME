export const ApiData = {
fetchAll: () => {
    return fetch('http://www.boredapi.com/api/activity/hello')
    .then(res => checkForErrors(res))
},
fetchType: (type) => {
    return fetch(`http://www.boredapi.com/api/activity?type=${type}`)
    .then(res => checkForErrors(res))
}
}

const checkForErrors = (res) => {
if(res.ok) {
    return res.json()
} else if(res.error) {
    throw res.error
}
}