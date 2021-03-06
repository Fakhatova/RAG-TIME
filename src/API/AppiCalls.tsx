export const ApiData = {
fetchAll: () => {
    return fetch('https://www.boredapi.com/api/activity/')
    .then(res => checkForErrors(res))
},
fetchType: (type: string) => {
    return fetch(`https://www.boredapi.com/api/activity?type=${type}`)
    .then(res => checkForErrors(res))
}
}

   // ***********************************************
        /* FETCH CALL ERROR HANDLE*/ 
   // ***********************************************
const checkForErrors = (res:any) => {
if(res.ok) {
    return res.json()
} else if(res.error) {
    throw res.error
}
}