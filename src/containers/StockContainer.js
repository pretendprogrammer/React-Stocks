import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map(stockObject => <Stock key={stockObject.id} stock={stockObject} handleClick={this.props.handleClick} />)
        }
      </div>
    );
  }

}

export default StockContainer;
