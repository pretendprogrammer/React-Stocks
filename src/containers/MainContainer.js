import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const URL = 'http://localhost:3000/stocks'

class MainContainer extends Component {
  
  state = {
    stocks: [],
    filter: null
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(array => this.setState({stocks: array}))
  }

  updateState = (newState) => {
    this.setState({stocks: newState})
  }

  setFilter = (filterString) => {
    this.setState({filter: filterString})
  }

  buyStock = (stockIdNum) => {
    const newstateArray = [...this.state.stocks]
    newstateArray[stockIdNum - 1].owned ? ++newstateArray[stockIdNum - 1].owned : newstateArray[stockIdNum - 1].owned = 1
    this.updateState(newstateArray)
  }
    
  sellStock = (stockIdNum) => {
    const newstateArray = [...this.state.stocks]
    --newstateArray[stockIdNum - 1].owned
    this.updateState(newstateArray)
  }

  render() {
    let stocksToDisplay = this.state.stocks
    if (this.state.filter === 'Name') {
      stocksToDisplay.sort((stockA, stockB) => stockA.name.localeCompare(stockB.name))
    } else if (this.state.filter === 'Price') {
      stocksToDisplay.sort((stockA, stockB) => stockA.price - stockB.price)
    } else if (this.state.filter === 'Sportswear') {
      stocksToDisplay = stocksToDisplay.filter(stockObj => stockObj.type === 'Sportswear')
    } else if (this.state.filter === 'Tech') {
      stocksToDisplay = stocksToDisplay.filter(stockObj => stockObj.type === 'Tech')
    } else if (this.state.filter === 'Finance') {
      stocksToDisplay = stocksToDisplay.filter(stockObj => stockObj.type === 'Finance')
    }

    return (
      <div>
        <SearchBar setFilter={this.setFilter} filterState={this.state.filter}/>

          <div className="row">
            <div className="col-8">
              {console.log()}

              <StockContainer handleClick={this.buyStock} stocks={stocksToDisplay}/>

            </div>
            <div className="col-4">

              <PortfolioContainer handleClick={this.sellStock} stocks={this.state.stocks}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
