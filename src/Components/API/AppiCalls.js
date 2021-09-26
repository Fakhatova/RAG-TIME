export const ApiData = {
fetchAll: () => {
    return fetch('http://www.boredapi.com/api/activity/')
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
}else {
    throw `${res.status} ERROR. could not access server data.`
}
}