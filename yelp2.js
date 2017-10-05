const clientId = 'sUMQ8tdyoNIBt0N0kSairw';
/* global access_token */
const secret = 'qBcH29fh4rnTRj0zPBUZJtzGwIF2neqDuEJC96k3hUPealio6KjMMmXKHEvDlUkw';
const url = 'https://cors-anywhere.herokuapp.com/';
const url2 ='https://api.yelp.com/v3/businesses/search';
const accessToken = ' ';

let Yelp = {

getAccessToken(){
  if(accessToken){
    return new Promise(resolve => resolve(accessToken));
  }
  return fetch(`https://cors-anywhere.herokuapp.com/{cliendId}{secret}`,{
    method: 'POST'
  }).then(response => {
    return response.json();
  }).then(jsonResponse => {
    access_token = jsonResponse.access_token;
  });

},

search: function(term, location, sortBy){
  return Yelp.getAccessToken().then(() => {return fetch(`https://api.yelp.com/v3/businesses/search{term}{location}{sortBy}`,{
    headers: `Bearer ${accessToken}`
  });
);

}
}
}
