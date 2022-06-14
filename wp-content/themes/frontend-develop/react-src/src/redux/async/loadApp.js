    import axios from "axios";
import { initialState } from "../initialState";
import { types } from "../types"
import { HideLoading, SetLoading, SetTypeLoading, HideTypeLoading } from "./loading";
import renderHTML from 'react-render-html';

//const per_page = initialState.per_page
const domen = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? "" : "" 

export const loadApp = () => {
    return async (dispatch) => {
        const page = 1
            
        dispatch(SetLoading("all"))
        dispatch(SetTypeLoading("settings"))
        dispatch(SetTypeLoading("categoriesList"))
        
        
        const siteInfo = await axios("/wp-json/api/v2/customset")
        
        dispatch({
            type: types.SetSettings,
            payload: siteInfo.data
        })
        dispatch(HideTypeLoading("settings"))
        
        const per_page = siteInfo.data.per_page
    
        
        const allProducts = await axios("/wp-json/wp/v2/posts?per_page=100")

        dispatch({
            type: types.SetProducts,
            payload: {
                allProducts: allProducts.data.length,
                page: 1
            }
        })
        
        const categoriesList = await axios(`/wp-json/wp/v2/categories`)

        dispatch({
            type: types.SetCategories,
            payload: { categories: categoriesList.data }
        })
        dispatch(HideTypeLoading("categoriesList"))

        const products = await axios(`/wp-json/wp/v2/posts?per_page=${per_page}&page=${page}`)

        dispatch({
            type: types.SetProducts,
            payload: {
                products: products.data
            }
        })
        
    // if (category) {
    //     const { data } = await axios(`/wp-json/wp/v2/posts?categories=${category}&per_page=${per_page}&page=${page}`)

    //     dispatch({
    //         type: types.SetCategoryProducts,
    //         payload: {
    //             id: category,
    //             products: data
    //         }
    //     })
    // }

        const additions = await axios(`/wp-json/wp/v2/additions`)

        dispatch({
            type: types.SetAdditions,
            payload: { additions: additions.data }
        })

        dispatch(HideLoading("all"))
    }
}