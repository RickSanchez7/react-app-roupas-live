import React, {useReducer, createContext} from 'react'

import {sidebarReducer} from './useReducer/sidebar/sidebar-reducer'
import {TOGGLE, CLOSE} from './useReducer/sidebar/sidebar-actions'

const SidebarContext = createContext()

const SidebarProvider = ({children}) => {

  const initialState = {
    showLinks: false
  }

  const [state, dispatch] = useReducer(sidebarReducer, initialState)

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
