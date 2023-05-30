import { useRef, useState } from "react";

export default function Section({ title, content }) {
    const [show, setShow] = useState(false);
    const panelRef = useRef(null);
    function showPanel() {
        setShow(!show);
        panelRef.current.style.maxHeight = 
        panelRef.current.style.maxHeight ? null : panelRef.current.scrollHeight + "px";
    }
    return (
        <>
            <button className={show ? "accordion active" : "accordion"} onClick={() => showPanel()}>{title}</button>
            <div ref={panelRef} className="panel">
                <p>{content}</p>
            </div>
        </>
    )
}