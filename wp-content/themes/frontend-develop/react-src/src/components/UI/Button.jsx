import React from 'react';

export const MyButton = ({ btn, textBtn, classBtn, sizeBtn, link, additClasses='', id='', data = {}, callback = () => {}}) => {
    if (btn)
    {
        return (
            <button onClick={callback} {...data} className={`btn btn-${classBtn} ${additClasses} ` + (sizeBtn ? `btn-${sizeBtn}` : '')}>{textBtn}</button>
        )
    }
        
    return (
        <a href={link} id={id} {...data} className={`btn btn-${classBtn} ${additClasses} ` + (sizeBtn ? `btn-${sizeBtn}` : '')} {...data}>{textBtn}</a>
    )
}