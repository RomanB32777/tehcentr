import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import renderHTML from 'react-render-html';
import { sendContactForm } from '../../redux/async/send';
import { types } from '../../redux/types';
import { AlertToast } from './AlertToast';
import { useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'
import CustomInput from './CustomInput';
import 'react-phone-number-input/style.css'


export const Modal = () => {

    const dispatch = useDispatch()
    const modal = useSelector(state => state.modal)
    const toasts = useSelector(state => state.toasts)
    const loading = useSelector(state => state.loading)

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [send, setSend] = useState(false)

    const errorInputs = (errors) => {
        // Object.keys(errors).forEach(key => {
        //     dispatch({
        //         type: types.AddToast,
        //         payload: { name: key, text: `Не заполнено поле ${key}`, color: 'danger' }
        //     })
        // })
    }

    const sendOrder = (data) => {
        setSend(true)
        dispatch(sendContactForm(
            { 
                productTitle: modal.productTitle, 
                productID: modal.productID, 
                send: true,
                ...data, 
                productPrice: !!modal.productPriceList.length ? data.productPrice : modal.productPrice 

            }, "/wp-json/contact-form-7/v1/contact-forms/12/feedback"))
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Заявка на аренду оборудования</h5>
                        <button onClick={() => setSend(false)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="reserved-block">
                                    <div className="reserved-block-img">
                                        {!!modal.productImg ? <img src={modal.productImg} alt="..." /> : <img src={require('../../img/tool2.png')} style={{padding: '4rem'}} alt="" />}
                                    </div>
                                    <div className="reserved-block-text">
                                        <p className="product-title">{renderHTML(modal.productTitle)}</p>
                                        {modal.productPrice && <p className="product-price">Цена: {modal.productPrice}₽ / сутки</p>}
                                        {modal.productPriceList &&
                                            <ul style={{ listStyle: "none", padding: 0 }} className="price-list">
                                                {modal.productPriceList.map((item, index) => <li className="price-list-item" key={index}>{item.description}: <span>{item.priceItem}</span>₽ / сутки</li>)}
                                            </ul>}

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <form onSubmit={handleSubmit(data => sendOrder(data), err => errorInputs(err))}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputName1" className="form-label">Имя<span>*</span></label>
                                        <input {...register("userName", { required: "Это поле обязательно для заполнения" })} defaultValue="" name="userName" className={"form-control " + (errors.userName ? "is-invalid" : (send ? "is-valid" : ""))} id="exampleInputName1" />
                                        {errors.userName && <span className="input-error text-danger">{errors.userName.message}</span>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputTel1" className="form-label">Телефон<span>*</span></label>
                                        <input {...register("userPhone", { required: "Это поле обязательно для заполнения" })} defaultValue="" type="tel" name="userPhone" className={"form-control " + (errors.userPhone ? "is-invalid" : (send ? "is-valid" : ""))} id="exampleInputPhone1" />
                                        {errors.userPhone && <span className="input-error text-danger">{errors.userPhone.message}</span>}
                                        {/* <PhoneInput type="tel" {...register("userPhone", { required: "Это поле обязательно для заполнения" })} value={order.user.userPhone} errors={errors.userPhone} send={order.send.toString()} inputComponent={ CustomInput } defaultCountry="RU"  /> */}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email<span>*</span></label>
                                        <input {...register("userEmail", { required: "Это поле обязательно для заполнения" })} type="email" name="userEmail" className={"form-control " + (errors.userEmail ? "is-invalid" : (send ? "is-valid" : ""))} id="exampleInputEmail1" />
                                        {errors.userEmail && <span className="input-error text-danger">{errors.userEmail.message}</span>}
                                    </div>
                                    {!!modal.productPriceList.length &&
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPrice1" className="form-label">Выбрать тип оборудования<span>*</span></label>
                                            <select {...register("productPrice")} id="exampleInputPrice1" className={"form-select " + (send ? "is-valid" : "")}>
                                                {modal.productPriceList.map((item, index) => <option className="price-option-item" value={item.description + ": " + item.priceItem} key={index}>{item.description}: {item.priceItem} ₽ / сутки</option>)}
                                            </select>
                                        </div>
                                    }
                                    <div className="">
                                        <label htmlFor="exampleInputMes1" className="form-label">Сообщение</label>
                                        <textarea {...register("userMessage")} className={"form-control " + (send ? "is-valid" : "")} name="userMessage" id="exampleInputMes1" aria-describedby="mesHelp" />
                                        <div id="mesHelp" className="form-text">Если есть допоплнения к заказу, то напишите о них</div>
                                    </div>
                                    <p className="form-text"><span style={{ color: "red" }}>*</span> - обязательно для заполнения</p>
                                    <div className="toasts-block">
                                        {toasts && toasts.map((toast, index) => <AlertToast key={index} name={toast.name} text={toast.text} color={toast.color} />)}
                                    </div>
                                    <input type="submit" className={"btn btn-primary " + (loading ? "disabled" : "")} value="Арендовать" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
