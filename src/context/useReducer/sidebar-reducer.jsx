import {TOGGLE, CLOSE} from './sidebar-actions'


  const reducer = (state, action) => {
    switch (action.type) {
      case TOGGLE:
        return {
          ...state,
          showLinks: !state.showLinks
        };
        case CLOSE:
          return {
            ...state,
            showLinks: false
          }
          default:
            return state
    }
  }


export default reducer
