import { makeRequest } from '../api/requests'
import { reqAllCharacters } from '../api/queries'

const getAllCharacters = async () => {
  return await makeRequest(reqAllCharacters)
    .then(({ data }) => data?.characters?.results)
    .catch((error) => {
      console.error('Error:', error)
    })
}

export const fetchCards = () => {
  return function (dispatch) {
    getAllCharacters().then(json => 
      dispatch({ type: 'ADD_CARDS', payload: json }),
    )
  }
}
