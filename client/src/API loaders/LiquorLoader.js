import React, { useState, useEffect } from 'react'
import LiquorPanel from '../components/LiquorPanel'

const LiquorLoader = ({ drinkType }) => {
  const [liquorArray, setLiquorArray] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9000/drinks/${drinkType}`)
      .then((response) => response.json())
      .then((data) => {
        const name = data.map(({ name, img, price, amount }) => (
          <LiquorPanel name={name} img={img} price={price} amount={amount} />
        ))
        setLiquorArray(name)
      })
  }, [drinkType])

  return (
    <div className="main-display-container">
      {liquorArray}
      <a href="http://localhost:3000/">Catagories</a>
    </div>
  )
}

export default LiquorLoader
