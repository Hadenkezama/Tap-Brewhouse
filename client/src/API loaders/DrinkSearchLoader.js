import React, { useEffect, useState } from 'react'
import LiquorPanel from '../components/LiquorPanel'
import booze from '../Datafiles/CatagorieList'
import Sidebar from '../components/Sidebar'

const DrinkSearchLoader = ({ match }) => {
  const [drink, setDrink] = useState()

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        await fetch(
          `http://localhost:9000/drinks/beers/search/${match.params.name}`,
        )
          .then((response) => response.json())
          .then((data) => {
            if (data !== 'Error') {
              const name = data.map(({ name, img, price, amount }) => (
                <LiquorPanel
                  name={name}
                  img={img}
                  price={price}
                  amount={amount}
                  key={name + amount}
                />
              ))
              setDrink(name)
            }
          })
      } catch (err) {
        console.log(err)
      }
    }
    const fetchWine = async () => {
      try {
        await fetch(
          `http://localhost:9000/drinks/wines/search/${match.params.name}`,
        )
          .then((response) => response.json())
          .then((data) => {
            if (data !== 'Error') {
              const name = data.map(({ name, img, price, amount }) => (
                <LiquorPanel
                  name={name}
                  img={img}
                  price={price}
                  amount={amount}
                  key={name + amount}
                />
              ))
              setDrink(name)
            }
          })
      } catch (err) {
        console.log(err)
      }
    }

    const fetchLiqueurs = async () => {
      try {
        await fetch(
          `http://localhost:9000/drinks/liqueurs/search/${match.params.name}`,
        )
          .then((response) => response.json())
          .then((data) => {
            if (data !== 'Error') {
              const name = data.map(({ name, img, price, amount }) => (
                <LiquorPanel
                  name={name}
                  img={img}
                  price={price}
                  amount={amount}
                  key={name + amount}
                />
              ))
              setDrink(name)
            }
          })
      } catch (err) {
        console.log(err)
      }
    }

    const fetchCooler_Cider = async () => {
      try {
        await fetch(
          `http://localhost:9000/drinks/coolers_ciders/search/${match.params.name}`,
        )
          .then((response) => response.json())
          .then((data) => {
            if (data !== 'Error') {
              const name = data.map(({ name, img, price, amount }) => (
                <LiquorPanel
                  name={name}
                  img={img}
                  price={price}
                  amount={amount}
                  key={name + amount}
                />
              ))

              setDrink(name)
            }
          })
      } catch (err) {
        console.log(err)
      }
    }
    const fetchSpirits = async () => {
      try {
        await fetch(
          `http://localhost:9000/drinks/spirits/search/${match.params.name}`,
        )
          .then((response) => response.json())
          .then((data) => {
            if (data !== 'Error') {
              const name = data.map(({ name, img, price, amount }) => (
                <LiquorPanel
                  name={name}
                  img={img}
                  price={price}
                  amount={amount}
                  key={name + amount}
                />
              ))
              setDrink(name)
            }
          })
      } catch (err) {
        console.log(err)
      }
    }
    const fetchOther = async () => {
      try {
        await fetch(
          `http://localhost:9000/drinks/other/search/${match.params.name}`,
        )
          .then((response) => response.json())
          .then((data) => {
            if (data !== 'Error') {
              const name = data.map(({ name, img, price, amount }) => (
                <LiquorPanel
                  name={name}
                  img={img}
                  price={price}
                  amount={amount}
                  key={name + amount}
                />
              ))
              setDrink(name)
            }
          })
      } catch (err) {
        console.log(err)
      }
    }
    if (match.params.catagorie === 'beers') {
      fetchBeer()
    } else if (match.params.catagorie === 'wines') {
      fetchWine()
    } else if (match.params.catagorie === 'liqueurs') {
      fetchLiqueurs()
    } else if (match.params.catagorie === 'spirits') {
      fetchSpirits()
    } else if (match.params.catagorie === 'coolers_ciders') {
      fetchCooler_Cider()
    } else if (match.params.catagorie === 'other') {
      fetchOther()
    } else {
      console.log('Error')
    }
  }, [match])

  const sidebar = booze.map((item) => (
    <Sidebar name={item.name} click={item.click} key={item.id} />
  ))

  return (
    <div className="main-display-container">
      {drink}
      <div className="side-bar-container">{sidebar}</div>
    </div>
  )
}

export default DrinkSearchLoader
