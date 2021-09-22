export const ApiData = {
fetchAll: () => {
    return fetch('http://www.boredapi.com/api/activity/')
    .then(res => res.json())
},
fetchType: (type) => {
    return fetch('http://www.boredapi.com/api/activity?type=${type}')
    .then(res => res.json())
}
}

const checkForErrors = (res) => {
if(res.ok) {
    return res.json()
}else {
    throw `${res.status} ERROR. could not access server data.`
}
}