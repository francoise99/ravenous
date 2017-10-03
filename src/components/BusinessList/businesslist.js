import React from 'react';
import './businesslist.css';
import Business from './../Business/business.js';

class BusinessList extends React.Component {
  render(){
    return(
      <div className="BusinessList">
      this.props.Businesses.map(business => <Business/>);
</div>)
  }
}
export default BusinessList;
