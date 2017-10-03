import React from 'react';
import './business.css';

class Business extends React.Component{
  render() {
    return (
      <div Business="Business">
  <div Business="image-container">
    <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
  </div>
  <h2>MarginOtto Pizzeria</h2>
  <div Business="Business-information">
    <div Business="Business-address">
      <p>1010 Paddington Way</p>
      <p>Bordertown</p>
      <p>NY 10101</p>
    </div>
    <div Business="Business-reviews">
      <h3>ITALIAN</h3>
      <h3 Business="rating">4.5 stars</h3>
      <p>90 reviews</p>
    </div>
  </div>
</div>
    );
  }}
export default Business;
