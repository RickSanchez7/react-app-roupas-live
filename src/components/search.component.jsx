import React, {useState} from 'react'

import {FaSearch} from 'react-icons/fa'

import './search.styles.scss'

const Search = () => {
  const [searchActive, setSearchActive] = useState(false)
  console.log(searchActive);


  return (
    <div className="search">
      <input type="text" className={`search-input ${searchActive ? 'show' : '' }`} />
      <FaSearch className='search-icon' onClick={()=>setSearchActive(searchActive => !searchActive)} />
    </div>
  )
}

export default Search
