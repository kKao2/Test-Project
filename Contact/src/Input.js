import React from "react";

export default function Input({ label, value, id, handleOnChange }) {
    return (
        <>
            <label>
                {label}
                <input type="text" value={value} id={id} onChange={(e) => handleOnChange(e)} />
            </label>
        </>
    )
}