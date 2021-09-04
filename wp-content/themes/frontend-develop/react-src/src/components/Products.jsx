import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { CategoriesList } from './UI/CategoriesList';
import { Category } from './Category';
import { Posts } from './Posts';
import { Search } from './Search';
import { Modal } from './UI/Modal';

export const Products = () => {
    return (
        <div id="products" name="products">
            <div className="container">
                <h3 className="text-center section-heading">Каталог оборудования для аренды</h3>
                <div className="row products-block">
                    <div className="col-lg-3 col-md-12 products-blockCategories">
                        <CategoriesList />
                    </div>
                    <div className="col-lg-9 col-md-12 products-blockPosts">
                        <Switch>
                            <Route path="/" exact>
                                <Posts />
                            </Route>
                            <Route path="/search/:search">
                                <Search />
                            </Route>
                            <Route path="/category/:id">
                                <Category />
                            </Route>
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </div>
            </div>
            <Modal />
        </div>
    )
}