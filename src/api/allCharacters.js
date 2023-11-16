import { makeRequest } from '../api/requests'
import { reqAllCharacters } from '../api/queries'

export const getAllCharacters = () => {
  return makeRequest(reqAllCharacters)
    .then(({ data }) => data?.characters?.results)
    .catch((error) => {
      console.error('Error:', error)
    })
}
