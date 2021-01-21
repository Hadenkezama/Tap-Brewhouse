import React, { useState, useEffect } from 'react'
import LiquorPanel from '../components/LiquorPanel'
import Sidebar from '../components/Sidebar'

const LiquorLoader = ({ drinkType }) => {
  const [liquorArray, setLiquorArray] = useState([])
  const [catagorieArray, setCatagorieArray] = useState([])

  useEffect(() => {
    async function fetchDrinks() {
      try {
        await fetch(`http://localhost:9000/drinks/${drinkType}`)
          .then((response) => response.json())
          .then((data) => {
            const name = data.map(({ name, img, price, amount }) => (
              <LiquorPanel
                name={name}
                img={img}
                price={price}
                amount={amount}
              />
            ))
            setLiquorArray(name)
          })
      } catch (err) {
        console.log(err)
      }
    }
    fetchDrinks()
  }, [drinkType])

  useEffect(() => {
    async function fetchCatagories() {
      if (drinkType === 'wines') {
        let colour, region
        try {
          await fetch(`http://localhost:9000/catagories/wine_colour`)
            .then((response) => response.json())
            .then((data) => {
              colour = data.map(({ catagorie }) => (
                <li>
                  <a href={catagorie}>{catagorie}</a>
                </li>
              ))
            })
          await fetch(`http://localhost:9000/catagories/wine_region`)
            .then((response) => response.json())
            .then((data) => {
              region = data.map(({ catagorie }) => (
                <li>
                  <a href={catagorie}>{catagorie}</a>
                </li>
              ))
            })
          const arr = colour.concat(region)
          setCatagorieArray(arr)
        } catch (err) {
          console.log(err)
        }
      } else {
        try {
          await fetch(`http://localhost:9000/catagories/${drinkType}`)
            .then((response) => response.json())
            .then((data) => {
              const cat = data.map(({ catagorie }) => (
                <li>
                  <a href={catagorie}>{catagorie}</a>
                </li>
              ))
              setCatagorieArray(cat)
            })
        } catch (err) {
          console.log(err)
        }
      }
    }
    fetchCatagories()
  }, [drinkType])

  return (
    <div className="main-display-container">
      <Sidebar list={catagorieArray} />
      {liquorArray}
      <a href="http://localhost:3000/">Catagories</a>
    </div>
  )
}

export default LiquorLoader
