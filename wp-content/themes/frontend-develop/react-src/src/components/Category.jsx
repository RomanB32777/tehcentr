import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Post } from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsInCategory } from '../redux/async/products';
import { Pagination } from './UI/Pagination';
import { types } from '../redux/types';
import { HideLoading, SetLoading } from '../redux/async/loading';

export const Category = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const products = useSelector(state => state.categoryProducts)
    const categories = useSelector(state => state.categories)
    const categoryName = useSelector(state => state.categoryName)
    const per_page = useSelector(state => state.per_page)
    const loadingType = useSelector(state => state.loadingType)
    
    useEffect(() => {
        const category = categories.filter(c => String(c.id) === id)
        if (!products[id]){
            dispatch(getPostsInCategory(id, 1, per_page)) 
        }
        else if (category) {
            dispatch(SetLoading("categories", false))
            dispatch({ type: types.SetCategoryName, payload: category[0].name })
            dispatch({ type: types.SetPagination, payload: setButtons() })
            dispatch(HideLoading("categories"))
        }
    }, [id])

    const setButtons = () => {
        const category = categories.filter(c => String(c.id) === id)
        const length = category[0] ? category[0].count : 0
        const countOfButtons = length && Math.ceil(length / per_page)
        let buttons = []

        if (countOfButtons)
            for (let i = 1; i <= countOfButtons; i++)
                buttons.push(i)
        return buttons
    }

    useEffect(() => {
        const category = categories.filter(c => String(c.id) === id)[0]
        category && dispatch({ type: types.SetCategoryName, payload: category.name })
        dispatch({ type: types.SetPagination, payload: setButtons() })
    }, [categories, products])

    return (
        <>
            <div className="category-container">
            <h5 className="category-name">Категория: <span className={`animate-${loadingType["categories"]}`}>{!loadingType["categories"] && categoryName}</span></h5>
                <div className={`row animate-${loadingType["categories"]}`}>
                    {!loadingType["categories"] && products[id] && products[id].map((product, index) => <Post key={index} post={product} />)}
                </div>
            </div>
            <Pagination type={"category"} />
        </>
    )
}