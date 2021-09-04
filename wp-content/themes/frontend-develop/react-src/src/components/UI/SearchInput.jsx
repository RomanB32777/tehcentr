import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { SearchPosts } from '../../redux/async/products';
import { types } from '../../redux/types';
import { MyButton } from './Button';

export const SearchInput = () => {

    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    const searchCheck = useSelector(state => state.search)
    const allSearchProducts = useSelector(state => state.allSearchProducts)
    const per_page = useSelector(state => state.per_page)

    const history = useHistory()

    const setSearchPosts = () => {
        if (search !== "") {
            dispatch(SearchPosts(search, 1, per_page))
            setSearch("")
            history.push(`/search/${search}`)
        }
    }

    const setButtons = () => {
        const countOfButtons = allSearchProducts && Math.ceil(allSearchProducts / per_page)
        let buttons = []
        if (countOfButtons)
            for (let i = 1; i <= countOfButtons; i++)
                buttons.push(i)
        return buttons
    }

    const handleKeypress = (e) => {
        e.charCode === 13 && setSearchPosts();
    }

    useEffect(() => {
        searchCheck && dispatch({ type: types.SetPagination, payload: setButtons() })
    }, [searchCheck, products])

    const btnSearch = {
        btn: true,
        textBtn: "Поиск",
        classBtn: "primary",
        id: "button-addon2",
        callback: setSearchPosts
    }

    return (
        <div className="input-group mb-3 search-input-group">
            <input value={search} onKeyPress={handleKeypress} onChange={e => setSearch(e.target.value)} type="text" className="form-control" placeholder="Найти инструмент" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <MyButton {...btnSearch} />
        </div>
    )
}