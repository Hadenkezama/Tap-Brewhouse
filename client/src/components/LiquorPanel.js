import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const LiquorPanel = ({ name, img, price, amount, click }) => {
  const [numToPurchase, setNumToPurchase] = useState(0)
  return (
    <div className="liquor-panel">
      <h1>{name}</h1>
      <p>{img}</p>
      {price ? (
        <p>Price: ${numToPurchase === 0 ? price : price * numToPurchase}</p>
      ) : (
        ''
      )}
      {amount ? <p>{amount}</p> : ''}
      {click ? (
        <Link to={click}>Go to {name}</Link>
      ) : (
        <div>
          {numToPurchase === 0 ? (
            ''
          ) : (
            <button onClick={() => setNumToPurchase(numToPurchase - 1)}>
              Minus -
            </button>
          )}
          <button onClick={() => setNumToPurchase(numToPurchase + 1)}>
            Add +
          </button>
        </div>
      )}
      {click ? '' : <p>Desired quantity {numToPurchase}</p>}
      {click ? (
        ''
      ) : (
        <button
          onClick={() => {
            numToPurchase === 0
              ? console.log('Nothing in cart')
              : console.log('Added to cart')
          }}
        >
          Add to cart
        </button>
      )}
    </div>
  )
}

export default LiquorPanel
