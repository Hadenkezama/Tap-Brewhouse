import React from 'react'
import LiquorPanel from './LiquorPanel'
import Sidebar from './Sidebar'

const Catagories = () => {
  const booze = [
    { id: 1, name: 'beers', img: 'img', click: 'http://localhost:3000/beers' },
    {
      id: 2,
      name: 'liqueurs',
      img: 'img',
      click: 'http://localhost:3000/liqueurs',
    },
    { id: 3, name: 'wine', img: 'img', click: 'http://localhost:3000/wines' },
    {
      id: 4,
      name: 'spirits',
      img: 'img',
      click: 'http://localhost:3000/spirits',
    },
    {
      id: 5,
      name: 'coolers & ciders',
      img: 'img',
      click: 'http://localhost:3000/coolers&ciders',
    },
    { id: 6, name: 'other', img: 'img', click: 'http://localhost:3000/other' },
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
    <li>
      <a href={item.click}>{item.name}</a>
    </li>
  ))

  return (
    <div className="main-display-container">
      {panels}
      <Sidebar list={sidebar} />
    </div>
  )
}

export default Catagories
