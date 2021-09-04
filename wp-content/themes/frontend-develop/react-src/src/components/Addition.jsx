import React from 'react';
import renderHTML from 'react-render-html';

export const Addition = ({ addition }) => {
    const imgUrl = addition.featured_media_src_url ? addition.featured_media_src_url : ""

    return (
        <div className="addition">
            <div className="card bg-dark text-white">
                <img src={imgUrl} className="addition-img card-img" alt="..." />
                <div className="card-img-overlay">
                    <div className="card-content">
                        <h5 className="card-title">{renderHTML(addition.title.rendered)}</h5>
                        <div className="card-description">
                            {addition.acf.descriptionList &&
                                <ul className="description-list">
                                    {addition.acf.descriptionList.map((item, index) => <li className="description-list-item" key={index}>{item}</li>)}
                                </ul>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}