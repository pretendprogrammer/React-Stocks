import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.stocks.map(stockObj => {
              if (stockObj.owned > 0) {
                return < Stock key={stockObj.id} stock={stockObj} handleClick={this.props.handleClick} />
              }
            })//render your portfolio stocks here
          }
      </div>
    );
  }

}

export default PortfolioContainer;
