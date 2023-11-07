const initialState = {
  likedCards: [],
}

export const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LIKE':
      if (!state.likedCards.includes(action.payload)) {
        return { ...state, likedCards: [...state.likedCards, action.payload]}
      }
      break
    case 'REMOVE_LIKE':
      if (state.likedCards.includes(action.payload)) {
        return {
          ...state,
          likedCards: [...state.likedCards].filter(
            (id) => id !== action.payload,
          ),
        }
      }
      break
    default:
      return state
  }
}
