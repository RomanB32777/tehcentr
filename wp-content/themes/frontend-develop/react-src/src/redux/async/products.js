import axios from "axios";
import { initialState } from "../initialState";
import { types } from "../types"
import { HideLoading, SetLoading } from "./loading";

//const per_page = initialState.per_page

export const getAllPosts = () => {
    return async (dispatch) => {

        dispatch(SetLoading("products"))
        const { data } = await axios(`/wp-json/wp/v2/posts`)
        dispatch(HideLoading("products"))

        dispatch({
            type: types.SetProducts,
            payload: {
                allProducts: data.length
            }
        })
    }
}

export const getPosts = ( page = 1, per_page = 6) => {
    return async (dispatch) => {
        dispatch(SetLoading("products"))
        //console.log(per_page)
        const { data } = await axios(`/wp-json/wp/v2/posts?per_page=${per_page}&page=${page}`)
        dispatch(HideLoading("products"))

        dispatch({
            type: types.SetProducts,
            payload: {
                products: data,
                page 
            }
        })
    }
}

export const getPostsInCategory = (category, page = 1, per_page) => {
    return async (dispatch) => {

        dispatch(SetLoading("categories"))
        if (!per_page) {
             const settings = await axios(`/wp-json/api/v2/customset/`)
             per_page = settings.data.per_page
        }
        const { data } = await axios(`/wp-json/wp/v2/posts?categories=${category}&per_page=${per_page}&page=${page}`)
        dispatch(HideLoading("categories"))

        dispatch({
            type: types.SetCategoryProducts,
            payload: {
                id: category,
                products: data,
                page
            }
        })
    }
}

export const SearchPosts = (search, page = 1, per_page ) => {
    return async (dispatch) => {

        dispatch(SetLoading("products"))
        if (!per_page) {
             const settings = await axios(`/wp-json/api/v2/customset/`)
             per_page = settings.data.per_page
        }
            
        const allSearchProducts = await axios(`/wp-json/wp/v2/search/?search=${search}&type=post`)
        const { data } = await axios(`/wp-json/wp/v2/search/?_embed&search=${search}&type=post&per_page=${per_page}&page=${page}`)
        let posts = data.map(post => post._embedded['self'][0])
        dispatch(HideLoading("products"))

        dispatch({
            type: types.SetProducts,
            payload: {
                searchProducts: posts,
                searchQuery: search,
                allSearchProducts: allSearchProducts.data.length
            }
        })
    }
}
