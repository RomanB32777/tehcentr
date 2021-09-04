import { types } from "../types";

export const handlersLoading = {
    [types.SetLoading]: (state, action) => {
        if (action.payload)
            return { ...state, loading: action.payload.allLoading, loadingType: {...state.loadingType, [action.payload.loadingType]: true} }
        else
            return { ...state, loading: true }

    },
    [types.HideLoading]: (state, action) => {
        if (action.payload)
            return { ...state, loading: action.payload.allLoading, loadingType: {...state.loadingType, [action.payload.loadingType]: false} }
        else 
            return { ...state, loading: false }
    },
    [types.SetTypeLoading]: (state, action) => {
        return { ...state, loadingType: {...state.loadingType, [action.payload]: true} }
    },
    [types.HideTypeLoading]: (state, action) => {
        return { ...state, loadingType: {...state.loadingType, [action.payload]: false} }
    },
}


// export const handlersLoading = {
//     [types.SetLoading]: (state) => {
//         if (action.)
//         return { ...state, loading: true }
//     },
//     [types.HideLoading]: (state) => {
//         return { ...state, loading: false }
//     },
// }