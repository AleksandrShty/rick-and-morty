import { getAllCharacters } from '../api/allCharacters'
import { getAllCards } from '../actions/cards'

export const fetchCards = () => {
  return function (dispatch) {
    getAllCharacters()
      .then((json) => dispatch(getAllCards(json)))
      .catch((error) => console.log('Error:', error))
  }
}
