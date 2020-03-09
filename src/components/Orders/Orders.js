import React, { Component } from 'react';
import './Orders.css';

//  I'll need these at some point to transfer the files

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setOrders } from '../../actions';
import { getOrders } from '../../apiCalls';
//import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

export class Orders extends Component {
  constructor(props) {
    super();
  }
} 

// This error is what is holding me up
componentDidMount() {
    getOrders()
      .then(data => this.props.setOrders(data.orders));
      .catch(err => console.error('Error fetching:', err));
};


orders = () => {

  this.props.orders.map(order => {
    return (
      <div className="order">
        <h3>{order.name}</h3>
        <ul className="ingredient-list">
          {order.ingredients.map(ingredient => {
            return <li>{ingredient}</li>
          })}
        </ul>
      </div>
    )
  });
}

  return (
    <section>
      { this.props.orders.length ? this.orders : <p>No orders yet!</p> }
    </section>
  )

  export const mapStateToProps = ({ orders }) => ({
    orders
  });
  
  export const mapDispatchToProps = dispatch => (
    bindActionCreators({
      setOrders,
    }, dispatch)
  );
  
  export default connect(mapStateToProps, mapDispatchToProps)(Orders);

export default Orders;