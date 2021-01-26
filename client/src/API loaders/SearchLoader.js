import { useState, useEffect } from 'react'

const SearchLoader = () => {
  const [drinkNames, setDrinkNames] = useState([{ name: '', id: 0 }])

  useEffect(() => {
    let beers = [{ name: '', amount: 0, catagorie: '' }],
      spirits = [{ name: '', amount: 0, catagorie: '' }],
      liqueurs = [{ name: '', amount: 0, catagorie: '' }],
      wines = [{ name: '', amount: 0, catagorie: '' }],
      coolers_ciders = [{ name: '', amount: 0, catagorie: '' }],
      other = [{ name: '', amount: 0, catagorie: '' }]
    async function getAllDrinks() {
      try {
        await fetch(`http://localhost:9000/drinks/beers`)
          .then((response) => response.json())
          .then((data) => {
            beers = data.map(({ name, amount }) => ({
              name: name,
              amount: amount,
              catagorie: 'beers',
            }))
          })
      } catch (err) {
        console.log(err)
      }

      try {
        await fetch(`http://localhost:9000/drinks/spirits`)
          .then((response) => response.json())
          .then((data) => {
            spirits = data.map(({ name, amount }) => ({
              name: name,
              amount: amount,
              catagorie: 'spirits',
            }))
          })
      } catch (err) {
        console.log(err)
      }
      try {
        await fetch(`http://localhost:9000/drinks/liqueurs`)
          .then((response) => response.json())
          .then((data) => {
            liqueurs = data.map(({ name, amount }) => ({
              name: name,
              amount: amount,
              catagorie: 'liqueurs',
            }))
          })
      } catch (err) {
        console.log(err)
      }
      try {
        await fetch(`http://localhost:9000/drinks/wines`)
          .then((response) => response.json())
          .then((data) => {
            wines = data.map(({ name, amount }) => ({
              name: name,
              amount: amount,
              catagorie: 'wines',
            }))
          })
      } catch (err) {
        console.log(err)
      }
      try {
        await fetch(`http://localhost:9000/drinks/coolers_ciders`)
          .then((response) => response.json())
          .then((data) => {
            coolers_ciders = data.map(({ name, amount }) => ({
              name: name,
              amount: amount,
              catagorie: 'coolers_ciders',
            }))
          })
      } catch (err) {
        console.log(err)
      }
      try {
        await fetch(`http://localhost:9000/drinks/other`)
          .then((response) => response.json())
          .then((data) => {
            other = data.map(({ name, amount }) => ({
              name: name,
              amount: amount,
              catagorie: 'other',
            }))
          })
      } catch (err) {
        console.log(err)
      }
      const arr2 = beers.concat(spirits, wines, liqueurs, coolers_ciders, other)
      setDrinkNames(arr2)
    }
    getAllDrinks()
  }, [])

  return drinkNames
}

export default SearchLoader
