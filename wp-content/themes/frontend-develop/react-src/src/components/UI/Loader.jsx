import React from 'react';
import loader from '../../img/loader4.gif'

export const Loader = ({loading}) => {
    loading ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible"
    return (
        <div className={`loader loader-${loading}`}>
            <img src={loader} alt="загрузка"/>
        </div>
    )
}