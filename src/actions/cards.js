export const getAllCards = (payload) => ({ type: 'GET_CARDS', payload})
export const deleteCardById = (payload) => ({ type: 'DELETE_CARD', payload})
export const fetching = () => ({ type: 'FETCHING'})
export const errorFetching = (payload) => ({ type: 'ERROR', payload})