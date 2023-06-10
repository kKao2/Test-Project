import React, { useContext } from "react";
import { ThemeContext, StateCounterContext } from "./Context.tsx";

type ButtonType = { 
  content: string | number,
  handleOnClick: (() => void) | (() => string)
} 

export default function Button({ content, handleOnClick }: ButtonType) {
  const theme = useContext(ThemeContext);
  const stateCounter = useContext(StateCounterContext);
  return (
    <button onClick={() => handleOnClick()}>{content}</button>
  )
}