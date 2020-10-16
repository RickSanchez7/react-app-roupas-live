import React, {useState, useEffect, createContext} from 'react'

const ScrollButtonContext = createContext()

const ScrollButtonProvider = ({children}) => {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {

      setHeight(window.pageYOffset)
    })

    return () => window.removeEventListener('scroll', ()=> {})
  })

  return (
    <ScrollButtonContext.Provider value={{height}}>
      {children}
    </ScrollButtonContext.Provider>
  )
}

export {ScrollButtonProvider, ScrollButtonContext}
