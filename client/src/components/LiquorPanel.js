import React from 'react'
import { Link } from 'react-router-dom'

const LiquorPanel = ({ name, img, price, amount, click }) => {
  return (
    <div className="liquor-panel">
      <h1>{name}</h1>
      <p>{img}</p>
      {price ? <p>{price}</p> : ''}
      {amount ? <p>{amount}</p> : ''}
      {click ? <Link to={click}>Go to {name}</Link> : ''}
    </div>
  )
}

export default LiquorPanel
