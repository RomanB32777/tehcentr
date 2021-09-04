import axios from "axios"
import { types } from "../types"
import { HideLoading, SetLoading } from "./loading"

export const getCategories = () => {
    return async (dispatch) => {

        dispatch(SetLoading("all"))
        const { data } = await axios(`/wp-json/wp/v2/categories`)
        dispatch(HideLoading("all"))
        
        //console.log(data)
        
        dispatch({
            type: types.SetCategories,
            payload: { categories: data }
        })
    }
}