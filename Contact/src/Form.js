import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function Form({ contactList, activeId, handleOnSubmit }) {
    let activeContact = contactList.filter(contactPerson => {
        return contactPerson.id === activeId;
    })

    const [name, setName] = useState(activeContact[0].name);
    const [email, setEmail] = useState(activeContact[0].email);

    function handleOnChangeName(e) {
        setName(e.target.value);
    }
    function handleOnChangeEmail(e) {
        setEmail(e.target.value);
    }
    function handleOnReset() {
        setName(activeContact[0].name);
        setEmail(activeContact[0].email);
    }

    return (
        <form onSubmit={(e) => handleOnSubmit(e, name, email)}>
            <Input label="Name: " value={name} id="name" handleOnChange={handleOnChangeName} />
            <br /><br />
            <Input label="Email: " value={email} id="email" handleOnChange={handleOnChangeEmail} />
            <br /><br />
            <input type="submit" value="Submit" />
            <Button text="Reset" handleOnReset={handleOnReset} />
        </form>
    )
}