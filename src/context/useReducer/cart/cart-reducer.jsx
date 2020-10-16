import {INCREASE_AMOUNT, DECREASE_AMOUNT, REMOVE_ITEM, CLEAR_CART, ADD_TO_CART} from './cart-actions'

export const cartreducer = (state, action) => {
  switch(action.type) {
    case INCREASE_AMOUNT:
      return state.map(item => {
            return item.id === action.payload
              ? { ...item, amount: item.amount + 1 }
              : { ...item };
          })

      case DECREASE_AMOUNT:
        return state.map(item => {
          return item.id === action.payload
            ? { ...item, amount: item.amount - 1 }
            : { ...item };
        })

      case REMOVE_ITEM:
        return state.filter(item => item.id !== action.payload)

        case ADD_TO_CART:
          const {id, imageUrl, name, price} = action.payload
          console.log(action.payload);
          let product = {id, imageUrl, name, price, amount : 1}
          return [...state, product]

        case CLEAR_CART:
          return []
          default:
            return state
  }
}