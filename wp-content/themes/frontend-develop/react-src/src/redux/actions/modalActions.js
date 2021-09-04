import { types } from "../types";

export const handlersModals = {
    [types.SetModal]: (state, action) => {
        return {...state, modal: {...action.payload}}
    },
    [types.SendOrder]: (state, action) => {
        return {...state, sendInfo: {...action.payload}}
    }
}