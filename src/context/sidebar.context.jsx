import React, {useReducer, createContext} from 'react'

import reducer from './useReducer/sidebar-reducer'
import {TOGGLE, CLOSE} from './useReducer/sidebar-actions'

const SidebarContext = createContext()

const SidebarProvider = ({children}) => {

  const initialState = {
    showLinks: false
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const closeSidebar = () =>{
    dispatch({
      type: CLOSE
    })
  }

  const toggleSidebar = () =>{
    dispatch({
      type: TOGGLE
    })
  }


  return (
    <SidebarContext.Provider value={{toggleSidebar, closeSidebar, state}}>
      {children}
    </SidebarContext.Provider>
  )
}

export {SidebarProvider, SidebarContext}
