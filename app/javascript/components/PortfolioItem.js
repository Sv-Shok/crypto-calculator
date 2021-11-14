import React from 'react'

const PortfolioItem = (props)=> {
  return(
    <div>
      <div className="row">
        <div className="col">
          <div className="header">Currency:</div>
          <div className="text">{props.item.currency.name}</div>  
        </div>

        <div className="col">
          <div className="header">Currency:</div>
          <div className="text">{props.item.current_price}</div>  
        </div>

        <div className="col">
          <div className="header">Currency:</div>
          <div className="text">{props.item.amount}</div>  
        </div>

        <div className="col">
          <div className="header">Currency:</div>
          <div className="text">{props.item.value}</div>  
        </div>
      </div>  
    </div>
  )  
}

export default PortfolioItem