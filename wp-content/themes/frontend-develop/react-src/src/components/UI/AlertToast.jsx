import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { types } from '../../redux/types';

export const AlertToast = ({ name, text, color }) => {

    const [show, setShow] = useState(true);
    const dispatch = useDispatch()

    const onCloseToast = () => {
        setShow(false)
        dispatch({
            type: types.RemoveToast,
            payload: { name, text, color }
        })
    }

    const onAllCloseToast = () => {
        setShow(false)
        dispatch({
            type: types.RemoveAllToast
        })
    }

    return (
        <Toast onClose={onAllCloseToast} animation={false} show={show} delay={7000} autohide bsPrefix={`toast text-white bg-${color} border-0`} >
            <div className="d-flex">
                <Toast.Body>{text}</Toast.Body>
                <button onClick={onCloseToast} type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Закрыть"></button>
            </div>
        </Toast>
    )
}