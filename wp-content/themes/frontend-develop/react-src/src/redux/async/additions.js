import axios from "axios"
import { types } from "../types"
import { HideLoading, SetLoading } from "./loading"

export const getAdditions = () => {
    return async (dispatch) => {
        
        dispatch(SetLoading())
        const { data } = await axios(`/wp-json/wp/v2/additions`)
        dispatch(HideLoading())

        dispatch({
            type: types.SetAdditions,
            payload: { additions: data }
        })
    }
}