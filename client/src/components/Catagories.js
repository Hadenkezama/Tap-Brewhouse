import React from 'react'
import LiquorPanel from './LiquorPanel'
import Sidebar from './Sidebar'
import booze from '../Datafiles/CatagorieList'
const Catagories = () => {
  const panels = booze.map((item) => (
    <LiquorPanel
      name={item.name}
      img={item.img}
      click={item.click}
      key={item.id}
    />
  ))
  const sidebar = booze.map((item) => (
    <Sidebar name={item.name} click={item.click} key={item.id} />
  ))

  return (
    <div className="main-display-container">
      {panels}
      <div className="side-bar-container">{sidebar}</div>
    </div>
  )
}

export default Catagories
