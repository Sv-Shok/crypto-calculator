import React from 'react'
import '../../assets/stylesheets/application.css'

const Search = (props)=> {

    const searchResults = props.searchResults.map((curr) => {
      return(
        <li key={curr.id} data-id={curr.id} 
            className="currency-list-item"
            onClick={props.handleSelect}
        >
          <a href="#" className="currency">
            <span>{curr.name}</span>
            <span>{curr.currency_symbol}</span>
          </a>
        </li>    
      ) 
    })

  return(
    <div>
      <h1>Cryptocurrency Portfolio Calculator</h1>
      <form>
        <div className="form-group"> 
          <label>Search for a Currency: </label><br/>
          <input
            onChange={props.handleChange} 
            autoComplete="off" 
            type="text" 
            name="name" 
            placeholder="Ex: Bitcoin, Litecoin, Ethereum..." 
            className="field"
          />    
        </div>
        <div className="currency-list">
          {searchResults}
        </div>  
      </form>  
    </div>  
  )  
}

export default Search