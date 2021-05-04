import React from 'react'

const Stock = (props) => (
  <div>

    <div className="card" onClick={() => props.handleClick(props.stock.id)}>
      <div className="card-body">
        <h5 className="card-title">{
            props.stock.name//Company Name
          }</h5>
        <p className="card-text">{
            props.stock.price//ticker: stock price
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
