import React, { useContext, memo } from "react";
import { ThemeContext, StateCounterContext } from "./Context.tsx";

type ButtonType = { 
  content: string | number,
  handleOnClick: (() => void) | (() => string)
} 

function Button({ content, handleOnClick }: ButtonType) {
  const theme = useContext(ThemeContext);
  const stateCounter = useContext(StateCounterContext);
  return (
    <button onClick={() => handleOnClick()}>{content}</button>
  )
}

export default memo(Button);