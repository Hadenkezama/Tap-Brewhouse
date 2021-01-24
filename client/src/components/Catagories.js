import React from 'react'
import LiquorPanel from './LiquorPanel'
import Sidebar from './Sidebar'

const Catagories = () => {
  const booze = [
    { id: 1, name: 'beers', img: 'img', click: '/beers' },
    {
      id: 2,
      name: 'liqueurs',
      img: 'img',
      click: '/liqueurs',
    },
    { id: 3, name: 'wine', img: 'img', click: '/wines' },
    {
      id: 4,
      name: 'spirits',
      img: 'img',
      click: '/spirits',
    },
    {
      id: 5,
      name: 'coolers & ciders',
      img: 'img',
      click: '/coolers_ciders',
    },
    { id: 6, name: 'other', img: 'img', click: '/other' },
  ]

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
