import { types } from "../types/types";

//ACTIONES
export const setError = ( err ) => ({
    type: types.uiSetError,
    payload: err
})

export const removeError = () => ({
    type: types.uiRemoveError
})