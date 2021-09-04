import axios from "axios"
import { types } from "../types"
import { HideLoading, SetLoading } from "./loading"

export const sendContactForm = (order, url) => {
    return async (dispatch) => {
 
        const form = new FormData();
        for (const field in order)
            form.append(field, order[field])
        
        const req = {
            method: 'post',
            url,
            headers: {},
            data: form
        }

        dispatch(SetLoading())
        const res = await axios(req)
        dispatch(HideLoading())

        const color = res.data.status === 'mail_sent' ? 'success' : 'danger'
        dispatch({
            type: types.AddToast,
            payload: {text: res.data.message, color}
        })

    }
}

