import { types } from "../types";

export const handlersProducts = {
    [types.SetProducts]: (state, action) => {
        return { ...state, ...action.payload }
    },
    [types.SetCategoryProducts]: (state, action) => {
        const categoryProducts = {...state.categoryProducts, [action.payload.id]: action.payload.products}
        return { ...state, categoryProducts }
    },
    [types.SetPagination]: (state, action) => {
        return { ...state, pagination: action.payload }
    },
    [types.SetSearch]: (state) => {
        return { ...state, search: false }
    }
}
