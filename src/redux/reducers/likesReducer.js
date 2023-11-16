const initialState = {
  likedCards: [],
}

export const likesReducer = (state = initialState, action) => {
  const likesFromLocalStorage = localStorage.getItem('likes')
  const likesArray = likesFromLocalStorage
    ? JSON.parse(likesFromLocalStorage)
    : []
  switch (action.type) {
    case 'ADD_LIKE':
      const resultAddingLike = {
        ...state,
        likedCards: [...likesArray, action.payload],
      }
      localStorage.setItem('likes', JSON.stringify(resultAddingLike.likedCards))
      return resultAddingLike
    case 'REMOVE_LIKE':
      const resultRemovingLike = {
        ...state,
        likedCards: [...likesArray].filter((id) => id !== action.payload),
      }
      localStorage.setItem(
        'likes',
        JSON.stringify(resultRemovingLike.likedCards),
      )
      return resultRemovingLike
    default:
      return state
  }
}
