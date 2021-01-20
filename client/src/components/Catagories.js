import React from 'react'
import LiquorPanel from './LiquorPanel'

const Catagories = () => {
  const booze = [
    { id: 1, name: 'beer', img: 'img' },
    { id: 2, name: 'liquor', img: 'img' },
    { id: 3, name: 'wine', img: 'img' },
    { id: 4, name: 'spirits', img: 'img' },
    { id: 5, name: 'coolers & ciders', img: 'img' },
    { id: 6, name: 'other', img: 'img' },
  ]

  const array = booze.map((item) => (
    <LiquorPanel name={item.name} img={item.img} key={item.id} />
  ))

  return <div className="main-display-container">{array}</div>
}

export default Catagories
