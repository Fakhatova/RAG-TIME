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

   // ***********************************************
        /* FETCH CALL ERROR HANDLE*/ 
   // ***********************************************
const checkForErrors = (res) => {
    console.log(res);
if(res.ok) {
    return res.json()
} else if(res.error) {
    console.log(res);
    throw res.error
}
}