const clientId = 'sUMQ8tdyoNIBt0N0kSairw';
const secret = 'qBcH29fh4rnTRj0zPBUZJtzGwIF2neqDuEJC96k3hUPealio6KjMMmXKHEvDlUkw'
const url = 'https://cors-anywhere.herokuapp.com/'
const url2 ='https://api.yelp.com/v3/businesses/search'
const accessToken
let Yelp{

getAccessToken(){
  if(accessToken){
    return new promise(resolve => resolve(accessToken));
  }
  return fetch(url + clienId + secret,{
    method: 'POST'
  }).then(response => {
    return response.json();
  }).then(jsonResponse => {
    access_token = jsonResponse.access_token;
  })

},
search(term, location, sortBy){
  return
  Yelp.getAccessToken().then( => fetch(url2 + term +location + sortBy, Object.keys(headers){
    `Bearer ${accessToken}`
  }).then(jsonResponse => {
    access_token = jsonResponse.access_token;
  })
}
}
