import React from 'react';
import { useDispatch } from 'react-redux';
import renderHTML from 'react-render-html';
import { types } from '../redux/types';

export const Post = ({ post }) => {

    const dispatch = useDispatch()

    const setModalProduct = () => {
        dispatch({
            type: types.SetModal,
            payload: {
                productID: post.id,
                productTitle: post.title.rendered,
                productPrice: post.acf.price ? post.acf.price : "",
                productPriceList: post.acf.priceList ? post.acf.priceList : [],
                productImg: post.featured_media_src_url
            }
        })
    }

    return (
        <div className="mb-3 col-lg-4 col-md-6 col-sm-12" >
            <div className="card">
                <div className="card-img">
                    {!!post.featured_media_src_url ? <img src={post.featured_media_src_url} className="card-img-top" alt="..." /> : <img src={require('../img/tool2.png')} style={{padding: '4rem'}} alt="" />}
                </div>
                <div className="card-body">
                    <div className="card-description">
                        <h4 className="card-title">{post.title && renderHTML(post.title.rendered)}</h4>
                        <div className="card-text">{post.content && renderHTML(post.content.rendered)}</div>
                        {post.acf.price && <p>Цена: {post.acf.price && post.acf.price}₽ / сутки</p>}
                    </div>
                    {post.acf.priceList &&
                        <ul className="price-list">
                            {post.acf.priceList.map((item, index) => <li className="price-list-item" key={index}>{item.description}: <span>{item.priceItem}</span>₽ / сутки</li>)}
                        </ul>}
                    {post.type == 'post' && <button onClick={() => setModalProduct()} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Заказать</button>}

                </div>
            </div>
        </div>

    )
}