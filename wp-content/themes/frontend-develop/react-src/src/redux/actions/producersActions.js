import { types } from "../types";

export const handlersProducers = {
    [types.SetProducers]: (state, action) => {
        return {...state, ...action.payload}
    }
}
