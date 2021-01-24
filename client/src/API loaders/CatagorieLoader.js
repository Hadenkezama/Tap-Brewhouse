import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'

const CatagorieLoader = ({ drinkType }) => {
  const [catagorieArray, setCatagorieArray] = useState([])

  useEffect(() => {
    async function fetchCatagories() {
      if (drinkType === 'wines') {
        let colour, region
        try {
          await fetch(`http://localhost:9000/catagories/wine_colour`)
            .then((response) => response.json())
            .then((data) => {
              colour = data.map(({ catagorie }) => catagorie)
            })
          await fetch(`http://localhost:9000/catagories/wine_region`)
            .then((response) => response.json())
            .then((data) => {
              region = data.map(({ catagorie }) => catagorie)
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
              const cat = data.map(({ catagorie }) => catagorie)
              setCatagorieArray(cat)
            })
        } catch (err) {
          console.log(err)
        }
      }
    }
    fetchCatagories()
  }, [drinkType])

  const sidebar = catagorieArray.map((item) => (
    <Sidebar name={item} click={`/${drinkType}/catagorie/${item}`} key={item} />
  ))

  return <div className="side-bar-container">{sidebar}</div>
}

export default CatagorieLoader
