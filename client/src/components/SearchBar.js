import React, { useState } from 'react'
import SearchLoader from '../API loaders/SearchLoader'
import { Link } from 'react-router-dom'

const SearchBar = () => {
  const [search, setSearch] = useState('')

  const toLoad = SearchLoader()
    .filter((item) => {
      if (item.name === '') {
        return item
      } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
        return item
      } else {
        return ''
      }
    })
    .map((item, key) => (
      <div className="search-suggestions" key={key}>
        <Link to={`/search/${item.catagorie}/${item.name}`}>
          <p>
            {item.name} Amount: {item.amount}
          </p>
        </Link>
      </div>
    ))

  return (
    <div>
      <div className="search-bar-container">
        <input
          type="text"
          value={search}
          className="search-bar"
          placeholder="Search..."
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      {search === '' ? '' : toLoad}
    </div>
  )
}

export default SearchBar
