import React, { forwardRef, useContext } from "react"
import { AuthorContext } from "./Context.tsx";

type ModalType = { handleOnClick: () => void, children: JSX.Element }

const Modal = forwardRef<HTMLDivElement, ModalType>(({ handleOnClick, children }, ref) => {
  const author = useContext(AuthorContext);
  return (
    <div className="modal-container">
      <div className="modal-box" ref={ref}>
        <span className="close-btn" onClick={() => handleOnClick()}>&#215;</span>
        {children}
      </div>
    </div>
  )
})

export default Modal;