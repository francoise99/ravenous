import React from 'react';
import './searchbar.css';


let sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};
class SearchBar extends React.Component {
    constructor(props){
      super(props);
      this.state= {term : '', location : '', sortByOptions : 'best_match'};
      this.handleTermChange = this.handleTermChange.bind(this);
      this.handleLocationChange = this.handleLocationChange.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
    }
renderSortByOptions(){

Object.keys(sortByOptions).map(sortbyOptions => {
let sortByOptionValue = sortByOptions[sortByOptions]
return <li key = {this.sortByOptionValue} SearchBar ={this.getSortByClass(sortByOptionValue)}
onClick = {this.handleSortByChange.bind(this.sortByOptionValue)}> {this.sortByOptions}</li>;
});
}


getSortByClass(sortbyOption){
  if (sortByOptions === this.state){
    return 'active';
  }else{
    return '';
  }
}

handleSortByChange(sortbyOption){
  this.setState(sortByOptions = sortbyOption);
}
handleTermChange(event){
  this.setState({term :event.target.value});
}
handleLocationChange(event){
  this.setState({location : event.target.value});
}

handleSearch(event){
  this.searchYelp(this.state(this.term, this.location, sortByOptions));
  event.prevenDefault();
}
render(){
  return(

    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {this.renderSortByOptions()};
          {this.sortByOptions};


        </ul>
      </div>
      <div className="SearchBar-fields">
        <input onChange ={this.term} placeholder="Search Businesses" />
        <input onChange ={this.location} placeholder="Where?" />
      </div>
      <div className="SearchBar-submit">
        <a onChange = {this.handleSearch}>Lets Go</a>
      </div>
    </div>
  );
}
}

export default SearchBar;
