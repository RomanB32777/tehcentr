import { types } from "../types"

export const handlersToasts = {
    [types.AddToast]: (state, action) => {
        return {...state, toasts: [...state.toasts, action.payload]}
    },
    [types.RemoveToast]: (state, action) => {
        return {...state, toasts: state.toasts.filter(toast => toast.name !== action.payload.name)}
    },
    [types.RemoveAllToast]: (state) => {
        return {...state, toasts: []}
    }
}
