import React, { useState, useEffect } from 'react'
import LiquorPanel from '../components/LiquorPanel'
import CatagorieLoader from './CatagorieLoader'

const LiquorLoader = ({ match }) => {
  const [liquorArray, setLiquorArray] = useState([])

  useEffect(() => {
    async function fetchDrinks() {
      try {
        await fetch(`http://localhost:9000/drinks/${match.params.drinks}`)
          .then((response) => response.json())
          .then((data) => {
            const name = data.map(({ name, img, price, amount }) => (
              <LiquorPanel
                name={name}
                img={img}
                price={price}
                amount={amount}
                key={name + amount}
              />
            ))
            setLiquorArray(name)
          })
      } catch (err) {
        console.log(err)
      }
    }
    fetchDrinks()
  }, [match.params.drinks])

  return (
    <div className="main-display-container">
      {match.params.drinks === 'other' ? (
        ''
      ) : (
        <CatagorieLoader drinkType={match.params.drinks} />
      )}
      {liquorArray}
      <a href="http://localhost:3000/">Catagories</a>
    </div>
  )
}

export default LiquorLoader
