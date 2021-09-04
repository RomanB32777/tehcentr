import { types } from "../types";

export const handlersAdditions = {
    [types.SetAdditions]: (state, action) => {
        return {...state, ...action.payload}
    }
}
