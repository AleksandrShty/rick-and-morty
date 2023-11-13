import { getAllCharacters } from '../api/allCharacters'
import { getAllCards, fetching, errorFetching } from '../actions/cards'

export const fetchCards = () => {
  return function (dispatch) {
    dispatch(fetching())
    getAllCharacters()
      .then((json) => dispatch(getAllCards(json)))
      .catch((error) => dispatch(errorFetching(error)))
  }
}
