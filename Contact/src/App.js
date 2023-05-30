import React, { useState } from "react";
import ContactButton from "./ContactButton";
import Form from "./Form";

export default function App() {
    const [contactList, setcontactList] = useState([
        { id: 1, name: "Taylor", email: "taylor@gmail.com" },
        { id: 2, name: "Alice", email: "alice@gmail.com" },
        { id: 3, name: "Bob", email: "bob@gmail.com" }
    ])
    const [activeId, setActiveId] = useState(contactList[0].id);

    function handleContactList(id) {
        setActiveId(id);
    }
    function handleOnSubmit(e, updateName, updateEmail) {
        e.preventDefault();
        setcontactList(
            contactList.map(contactPerson => {
                if (contactPerson.id === activeId) {
                    return { ...contactPerson, name: updateName, email: updateEmail };
                }
                else {
                    return contactPerson;
                }
            })
        )
    }

    return (
        <>
            <ul className="nav nav-pills">
                <ContactButton contactList={contactList} activeId={activeId} handleContactList={handleContactList} />
            </ul>
            <hr />
            <Form key={activeId} contactList={contactList} activeId={activeId} handleOnSubmit={handleOnSubmit} />
        </>
    )
}