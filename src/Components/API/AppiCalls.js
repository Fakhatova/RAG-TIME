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