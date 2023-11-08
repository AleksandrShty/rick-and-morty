const initialState = {
  likedCards: [],
}

export const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LIKE':
      return { ...state, likedCards: [...state.likedCards, action.payload]}
    case 'REMOVE_LIKE':
      return {
        ...state,
        likedCards: [...state.likedCards].filter(
          (id) => id !== action.payload,
        ),
      }
    default:
      return state
  }
}
