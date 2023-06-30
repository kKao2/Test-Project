import React, { useContext } from "react";
import logo from "../logo.png";
import { DispatchPageContext } from "../Context.tsx";

export default function Logo() {
  const dispatchPage = useContext(DispatchPageContext);
  return (
    <button 
      className="mr-auto flex flex-row gap-x-1.5 transition-colors hover:text-sky-500" 
      onClick={() => dispatchPage?.({ type: "change_page", payload: "home" })}
    >
      <img className="h-8 w-8" src={logo} alt="logo" />
      <p className="self-center font-bold">React TypeScript CheatSheet</p>
    </button>
  );
}
