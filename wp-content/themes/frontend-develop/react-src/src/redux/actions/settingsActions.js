import { types } from "../types";

export const handlersSettings = {
    [types.SetSettings]: (state, action) => {
        return {...state, ...action.payload}
    }
}
