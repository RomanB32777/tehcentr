import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getPosts, getPostsInCategory, SearchPosts } from '../../redux/async/products';

export const Pagination = ({ type }) => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const search = useSelector(state => state.search)
    const searchQuery = useSelector(state => state.searchQuery)
    const pagination = useSelector(state => state.pagination)
    const per_page = useSelector(state => state.per_page)
    
    useEffect(() => {
        setPage(1)
    }, [id])
    

    const setPageClick = (pageClick) => {
        setPage(pageClick)
        const typeDispatch = search ? "search" : type
        switch (typeDispatch) {
            
            case "products":
                dispatch(getPosts(pageClick, per_page))
                break;

            case "category":
                id && dispatch(getPostsInCategory(id, pageClick, per_page))
                break;

            case "search":
                dispatch(SearchPosts(searchQuery, pageClick, per_page))
                break;

            default:
                break;
        }
    }

    if (!pagination.length || pagination.length === 1)
        return <></>

    return (
        <nav className="pagination-nav" aria-label="...">
            <ul className="pagination">
                <li className={"page-item " + (page === 1 ? "disabled" : "")}>
                    <a onClick={() => setPageClick(page - 1)} className="page-link" href="#products" tabIndex="-1" aria-disabled="true">Назад</a>
                </li>
                {pagination && pagination.map((button, index) => (
                    <li key={index} className={"page-item number-item " + (button === page ? "active" : "")} aria-current="page">
                        <a onClick={() => setPageClick(button)} className="page-link" href="#products">{button}</a>
                    </li>
                ))}
                <li className={"page-item " + (page === pagination.length ? "disabled" : "")}>
                    <a onClick={() => setPageClick(page + 1)} className="page-link" href="#products">Вперед</a>
                </li>
            </ul>
        </nav>
    )
}