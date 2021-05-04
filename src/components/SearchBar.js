import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Name" checked={props.filterState === 'Name'} onChange={(e) => {props.setFilter(e.target.value)}}/>
        Name
      </label>
      <label>
        <input type="radio" value="Price" checked={props.filterState === 'Price'} onChange={(e) => {props.setFilter(e.target.value)}}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => {props.setFilter(e.target.value)}}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
