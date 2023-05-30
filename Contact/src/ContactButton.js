import React from "react";

export default function ContactButton({ contactList, activeId, handleContactList }) {
    return (
        <>
            {contactList.map(contactPerson => {
                let buttonClassName = "nav-link";
                if (contactPerson.id === activeId)
                    buttonClassName += " active";
                return (
                    <li key={contactPerson.id} className="nav-item">
                        <button className={buttonClassName} onClick={() => handleContactList(contactPerson.id)}>{contactPerson.name}</button>
                    </li>
                )
            })}
        </>
    )
}