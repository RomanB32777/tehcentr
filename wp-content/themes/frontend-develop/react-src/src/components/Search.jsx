import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, SearchPosts } from '../redux/async/products';
import { types } from '../redux/types';
import { Post } from './Post';
import { Pagination } from './UI/Pagination';
import { useParams } from 'react-router';

export const Search = () => {
    const dispatch = useDispatch()
    const searchProducts = useSelector(state => state.searchProducts)
    const searchQuery = useSelector(state => state.searchQuery)
    const allSearchProducts = useSelector(state => state.allSearchProducts)
    const loadingType = useSelector(state => state.loadingType)
    const per_page = useSelector(state => state.per_page)
    const { search } = useParams()
    
     useEffect(() => {
        !searchProducts.length && dispatch(SearchPosts(search, 1, per_page))
     }, [searchProducts])

    useEffect(() => {
        const countOfButtons = Math.ceil(allSearchProducts / per_page)
        let buttons = []
        if (countOfButtons)
            for (let i = 1; i <= countOfButtons; i++)
                buttons.push(i)
        dispatch({ type: types.SetPagination, payload: buttons })
    }, [allSearchProducts])

    return (
        <>
            <div className="products-container">
                 <h5 className="search-result">Вы искали: <span className={`animate-${loadingType["products"]}`}>{!loadingType["products"] && searchQuery}</span></h5>
                <div className={`row animate-${loadingType["products"]}`}>
                    {!searchProducts.length && <h4 className="no-search-result"><span>Ничего</span> не найдено</h4> }
                    {!loadingType["products"] && searchProducts && searchProducts.map((product, index) => <Post key={index} post={product} />)}
                </div>
            </div>
            <Pagination type={"search"} />
        </>
    )
}