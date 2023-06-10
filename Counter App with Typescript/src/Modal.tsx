import React, { forwardRef, memo, useContext } from "react"
import { AuthorContext } from "./Context.tsx";

const Modal = forwardRef<HTMLDivElement, { handleOnClick: () => void }>(({ handleOnClick }, ref) => {
  const author = useContext(AuthorContext);
  return (
    <div className="modal-container" ref={ref}>
      <div className="modal-box">
        <span className="close-btn" onClick={() => handleOnClick()}>&#215;</span>
        <p style={{ padding: "32px 12px" }}>{author}</p>
      </div>
    </div>
  )
})

export default memo(Modal);