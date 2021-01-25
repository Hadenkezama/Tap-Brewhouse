import React, { useState, useEffect } from 'react'
import LiquorPanel from '../components/LiquorPanel'
import CatagorieLoader from './CatagorieLoader'

const LiquorLoader = ({ match }) => {
  const [liquorArray, setLiquorArray] = useState([])

  useEffect(() => {
    async function fetchDrinks() {
      if (!match.params.wine_region && match.params.wine_colour) {
        try {
          await fetch(
            `http://localhost:9000/drinks/wines/catagorie/wine_colour/${match.params.wine_colour}`,
          )
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
      } else if (!match.params.wine_colour && match.params.wine_region) {
        try {
          await fetch(
            `http://localhost:9000/drinks/wines/catagorie/wine_region/${match.params.wine_region}`,
          )
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
      } else if (match.params.wine_colour && match.params.wine_region) {
        try {
          await fetch(
            `http://localhost:9000/drinks/wines/catagorie/wine_colour/${match.params.wine_colour}/wine_region/${match.params.wine_region}`,
          )
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
      } else {
        console.log('Error with wine route')
      }
    }
    fetchDrinks()
  }, [match])

  return (
    <div className="main-display-container">
      <CatagorieLoader drinkType={'wines'} />
      {liquorArray}
      <a href="http://localhost:3000/">Catagories</a>
    </div>
  )
}

export default LiquorLoader
