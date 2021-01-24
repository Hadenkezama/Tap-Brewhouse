import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ name, click }) => {
  return <div>{click ? <Link to={click}>{name}</Link> : ''}</div>
}

export default Sidebar
