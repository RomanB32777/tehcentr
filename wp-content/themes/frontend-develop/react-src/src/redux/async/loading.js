import { types } from "../types"

// export const SetLoading = () => {
//     return {type: types.SetLoading}
// }

// export const HideLoading = () => {
//     return {type: types.HideLoading}
// }

export const SetLoading = (loadingType, allLoading = true) => {
    return {type: types.SetLoading, payload: {loadingType, allLoading}}
}

export const HideLoading = (loadingType, allLoading = false) => {
    return async (dispatch) => {
        setTimeout(() => {
            dispatch({type: types.HideLoading, payload: { loadingType, allLoading }})
        }, 200)
    }
}

export const SetTypeLoading = (loadingType) => {
    return {type: types.SetTypeLoading, payload: loadingType}
}


export const HideTypeLoading = (loadingType) => {
    return async (dispatch) => {
        setTimeout(() => {
            dispatch({type: types.HideTypeLoading, payload: loadingType })
        }, 200)
    }
}

// export const HideLoading = () => {
//    return async (dispatch) => {
//        setTimeout(() => {
//            dispatch({type: types.HideLoading})
//        }, 500)
//    }
// }