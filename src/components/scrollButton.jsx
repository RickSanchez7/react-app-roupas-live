import React, { useContext } from 'react'

import {FaAngleDoubleUp} from 'react-icons/fa'

import {ScrollButtonContext} from '../context/scrollButton.context'

import './scrollButton.styles.scss'


const ScrollButton = () => {
  const {height} = useContext(ScrollButtonContext)

  const scrollBackToTop = () => {
    window.scrollTo({
      top:0,
      left:0,
      behavior: 'smooth'
    })
  }

  return (
    <button className={height > 100 ? 'scroll-btn show-scroll-btn' : 'scroll-btn'} onClick={scrollBackToTop}>
      <FaAngleDoubleUp></FaAngleDoubleUp>
    </button>
  )
}

export default ScrollButton
