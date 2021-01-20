import React, { useState, useEffect } from 'react'
import LiquorPanel from '../components/LiquorPanel'

const BeerLoader = () => {
  const [beerArray, setBeerArray] = useState([])

  useEffect(() => {
    fetch('http://localhost:9000/drinks/beers')
      .then((response) => response.json())
      .then((data) => {
        const name = data.map(({ name, img, price, amount }) => (
          <LiquorPanel name={name} img={img} price={price} amount={amount} />
        ))
        setBeerArray(name)
      })
  }, [])

  return <div>{beerArray}</div>
}

export default BeerLoader
