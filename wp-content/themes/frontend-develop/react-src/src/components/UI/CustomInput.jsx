import React, { forwardRef, useState } from 'react';

export const InputPhone = (props, ref) => {

    const [d, setD] = useState("")
    // console.log(ref);
    // console.log(props.onChange, props, "fdf");
    return (
        <>
            <input name="userPhone" id="exampleInputPhone1" {...props}  ref={ref} className={"form-control form-phone-control " + (props.errors ? "is-invalid" : (props.send === "true" ? "is-valid" : ""))} />
            {/* onChange={props.onChange} */}
            {props.errors && <span className="input-error text-danger">{props.errors.message}</span>}
        </>
    )
}

export default forwardRef(InputPhone)