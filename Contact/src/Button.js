import React from "react";

export default function Button({ text, handleOnReset }) {
    return (
        <button onClick={() => handleOnReset()}>{text}</button>
    )
}