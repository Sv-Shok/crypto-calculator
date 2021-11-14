import React from 'react'
import PortfolioContainer from './PortfolioContainer'
import axios from 'axios'

const token = 
      document.querySelector('[name=csrf-token]')
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token

const App = ()=> {
  return(
    <PortfolioContainer />  
  )  
}

export default App