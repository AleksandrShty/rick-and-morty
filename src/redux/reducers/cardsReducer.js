const initialState = {
  cards: [],
}

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CARDS':
        return { ...state, cards: [...action.payload]}
    case 'DELETE_CARD':
      return { ...state, cards: state.cards.filter((item) => item.id !== action.payload)}       
    default:
      return state
  }
}
