import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { types } from '../../redux/types';
import { SearchInput } from './SearchInput';
import { SelectCategory } from './SelectCategory';

export const CategoriesList = () => {

    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories)
    const allProducts = useSelector(state => state.allProducts)
    const loadingType = useSelector(state => state.loadingType)

    useEffect(() => {
        // dispatch(getCategories())
        // !categories.length && dispatch(getPosts())
    }, [])

    return (
        <>
            <SearchInput />
            <div className="categoriesList">
                {!loadingType["categoriesList"] &&
                    <>
                        <ul className={`list-group d-none d-lg-block animate-${loadingType["categoriesList"]}`}>
                            <NavLink onClick={() => dispatch({ type: types.SetSearch })} to={`/`} >
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <p>Все иснтрументы</p>
                                    <span className="badge bg-primary rounded-pill">{allProducts}</span>
                                </li>
                            </NavLink>
                            { categories.map((cat, index) => {
                                if (cat.count)
                                    return (
                                        <NavLink  key={index} to={`/category/${cat.id}`} >
                                            <li key={index} className={`list-group-item d-flex justify-content-between align-items-center animate-${loadingType["categoriesList"]}`}>
                                                <p>{cat.name}</p>
                                                <span className="badge bg-primary rounded-pill">{cat.count}</span>
                                            </li>
                                        </NavLink>
                                    )
                            })}
                        </ul>
                        <SelectCategory />
                    </>
                }
            </div>
        </>

    )
}