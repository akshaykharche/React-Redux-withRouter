const loadUserApi = (payload) => {
   return fetch('/contacts.json')
    .then(response => {
      return response.json()
    })
    .then((findResponse) => {
      return findResponse;
    })
    .catch(function (exception) {
      console.log('Parsing Failed', exception)
    })

};
export default loadUserApi;



