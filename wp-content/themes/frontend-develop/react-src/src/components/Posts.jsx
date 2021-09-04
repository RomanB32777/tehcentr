import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/async/products';
import { types } from '../redux/types';
import { Post } from './Post';
import { Pagination } from './UI/Pagination';
import { useParams } from 'react-router';

export const Posts = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    const search = useSelector(state => state.search)
    const searchQuery = useSelector(state => state.searchQuery)
    const per_page = useSelector(state => state.per_page)
    const allProducts = useSelector(state => state.allProducts)
    const allSearchProducts = useSelector(state => state.allSearchProducts)
    const loadingType = useSelector(state => state.loadingType)
    const page = useSelector(state => state.page)
    const { id } = useParams()
    
    useEffect(() => {
        page !== 1 && dispatch(getPosts(1, per_page))
    }, [])

    useEffect(() => {
        const countOfButtons = Math.ceil(allProducts / per_page)
        let buttons = []
        if (countOfButtons)
            for (let i = 1; i <= countOfButtons; i++)
                buttons.push(i)
        dispatch({ type: types.SetPagination, payload: buttons })
    }, [products])

    return (
        <>
            <div className="products-container">
                <div className={`row animate-${loadingType["products"]}`}>
                    {!loadingType["products"] && products && products.map((product, index) => <Post key={index} post={product} />)}
                </div>
            </div>
            <Pagination type={"products"} />
        </>
    )
}