import { types } from "../types";

export const handlersCategories = {
    [types.SetCategories]: (state, action) => {
        return {...state, ...action.payload}
    },
    [types.SetCategoryName]: (state, action) => {
        return {...state, categoryName: action.payload }
    }
}
