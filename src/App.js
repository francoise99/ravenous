import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/businesslist.js';
import SearchBar from './components/SearchBar/searchbar.js';


let business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}
const Businesses = [
  <businesslist/>, <Business-reviews/>, <Business-information/>, <Business-address/>, <business/>,
];


class App extends Component {
searchYelp(term, location, sortBy){
  console.log('Searching yelp with'+ term+','+location+','+sortBy);
}

  render() {
    return (
      <div className="App">
  <h1>ravenous</h1>
  <SearchBar/>


</div>
    );
  }
}

export default App;
