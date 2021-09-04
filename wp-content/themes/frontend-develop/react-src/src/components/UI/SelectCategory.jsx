import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { types } from '../../redux/types';

export const SelectCategory = () => {

    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories)
    const allProducts = useSelector(state => state.allProducts)

    return (
        <div>
            <Dropdown className="categoriesList-mobile">
                <Dropdown.Toggle  id="dropdown-basic">
                    Категории
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item as="button" className="dropdown-item d-flex justify-content-between align-items-center">
                        <NavLink onClick={() => dispatch({ type: types.SetSearch })} to={`/`} >
                            Все иснтрументы
                        </NavLink>
                        <span className="badge bg-primary rounded-pill">{allProducts}</span>
                    </Dropdown.Item>
                    {categories.map((cat, index) => {
                        if (cat.count)
                            return (
                                <Dropdown.Item  as="button" key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                                    <NavLink to={`/category/${cat.id}`} >
                                        {cat.name}
                                    </NavLink>
                                    <span className="badge bg-primary rounded-pill">{cat.count}</span>
                                </Dropdown.Item>
                            )
                    })
                    }
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}