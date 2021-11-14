import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Search from './Search'
import Calculate from './Calculate'
import Portfolio from './Portfolio'

const PortfolioContainer = () => {
  
  const [portfolio, setPortfolio] = useState([])
  const [search_results, setSearch_results] = useState([])  
  const [active_currency, setActive_currency] = useState(null)
  const [amount, setAmount] = useState('')

  const handleChange = (e) => {
    
    axios.post('http://localhost:3000/search', {
        search: e.target.value  
      })
      .then((data) => {
        setSearch_results([...data.data.currencies])
      })
      .catch((data) => {
       debugger
      })
  }

  const handleSelect = (e) => {
      e.preventDefault()
      const id = e.currentTarget.getAttribute('data-id')
      const activeCurrency = search_results.find(item => item.id == parseInt(id))

      setActive_currency(activeCurrency)
  }

  useEffect(() => setSearch_results([]),[active_currency])

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost:3000/calculate', {
      id: active_currency.id,
      amount: amount  
    })
    .then((data) => { 
      console.log(data)
      setPortfolio([...portfolio, data.data])
    })
    .then(() => {
      setActive_currency(null)
      setAmount('')
    })
    .catch((data) => {
     debugger
    })
  }

  const handleAmount = (e) => {
    setAmount(e.target.value)
  }

  const searchOrCalculate = active_currency 
    ? <Calculate 
        handleSubmit={handleSubmit} 
        handleChange={handleAmount} 
        active_currency={active_currency} 
        amount={amount} 
      /> 
    : <Search 
        searchResults={search_results} 
        handleChange={handleChange} 
        handleSelect={handleSelect} 
      />

  return(
    <div className="grid">
      <div className="left">
        {searchOrCalculate}
      </div>
      <div className="right">
        <Portfolio portfolio={portfolio} />
      </div>
    </div>  
  )  
}

export default PortfolioContainer