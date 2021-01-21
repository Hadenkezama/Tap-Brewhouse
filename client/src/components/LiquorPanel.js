import React from 'react'

const LiquorPanel = ({ name, img, price, amount, click }) => {
  return (
    <div className="liquor-panel">
      <h1>{name}</h1>
      <p>{img}</p>
      {price ? <p>{price}</p> : ''}
      {amount ? <p>{amount}</p> : ''}
      {click ? <a href={click}>go to</a> : ''}
    </div>
  )
}

export default LiquorPanel
