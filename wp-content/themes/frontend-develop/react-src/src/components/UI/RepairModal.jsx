import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { sendContactForm } from '../../redux/async/send';
import { AlertToast } from './AlertToast';

export const RepairModal = () => {

    const [send, setSend] = useState(false);
    const dispatch = useDispatch()
    const toasts = useSelector(state => state.toasts)
    const loading = useSelector(state => state.loading)
    const { register, handleSubmit, formState: { errors } } = useForm()

    const sendRequest = (data) => {
        setSend(true)
        dispatch(sendContactForm({...data, send: true}, "/wp-json/contact-form-7/v1/contact-forms/100/feedback"))
    }


    return (
        <div className="modal fade" id="repairModal" tabIndex="-1" aria-labelledby="repairModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="repairModalLabel">Заявка на ремонт оборудования</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit(data => sendRequest(data))}>
                            <div className="mb-3">
                                <label htmlFor="repairInputName1" className="form-label">Имя<span>*</span></label>
                                <input {...register("userName", { required: "Это поле обязательно для заполнения" })} defaultValue="" name="userName" className={"form-control " + (errors.userName ? "is-invalid" : (send ? "is-valid" : ""))} id="repairInputName1" />
                                {errors.userName && <span className="input-error text-danger">{errors.userName.message}</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="repairInputTel1" className="form-label">Телефон<span>*</span></label>
                                <input {...register("userPhone", { required: "Это поле обязательно для заполнения" })} defaultValue="" type="tel" name="userPhone" className={"form-control " + (errors.userPhone ? "is-invalid" : (send ? "is-valid" : ""))} id="repairInputPhone1" />
                                {errors.userPhone && <span className="input-error text-danger">{errors.userPhone.message}</span>}
                                {/* <PhoneInput type="tel" {...register("userPhone", { required: "Это поле обязательно для заполнения" })} value={order.user.userPhone} errors={errors.userPhone} send={order.send.toString()} inputComponent={ CustomInput } defaultCountry="RU"  /> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="repairInputEmail1" className="form-label">Email<span>*</span></label>
                                <input {...register("userEmail", { required: "Это поле обязательно для заполнения" })} type="email" name="userEmail" className={"form-control " + (errors.userEmail ? "is-invalid" : (send ? "is-valid" : ""))} id="repairInputEmail1" />
                                {errors.userEmail && <span className="input-error text-danger">{errors.userEmail.message}</span>}
                            </div>
                            <div className="">
                                <label htmlFor="repairInputMes1" className="form-label">Инструмент/оборудование для ремонта<span>*</span></label>
                                <textarea {...register("userMessage", { required: "Это поле обязательно для заполнения" })} className={"form-control " + (errors.userMessage ? "is-invalid" : (send ? "is-valid" : ""))} name="userMessage" id="repairInputMes1" aria-describedby="mesHelp" />
                                {errors.userMessage && <span className="input-error text-danger">{errors.userMessage.message}</span>}
                                <div id="mesHelp" className="form-text">Опишите инструмент/оборудование и какой ремонт необходим </div>
                            </div>
                            <p className="form-text"><span style={{ color: "red" }}>*</span> - обязательно для заполнения</p>
                            <div className="toasts-block">
                                {toasts && toasts.map((toast, index) => <AlertToast key={index} name={toast.name} text={toast.text} color={toast.color} />)}
                            </div>
                            <input type="submit" className={"btn btn-primary " + (loading ? "disabled" : "")} value="Отправить заявку" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}