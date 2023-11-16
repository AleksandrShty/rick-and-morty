const initialState = {
  cards: [],
  isLoading: false,
  error: ''
}

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CARDS':
      return { ...state, cards: [...action.payload], isLoading: false }
    case 'FETCHING':
      return { ...state, isLoading: true }
    case 'ERROR':
      return { ...state, isLoading: false, error: action.payload }
    case 'DELETE_CARD':
      return {
        ...state,
        cards: state.cards.filter((item) => item.id !== action.payload),
      }
    default:
      return state
  }
}
