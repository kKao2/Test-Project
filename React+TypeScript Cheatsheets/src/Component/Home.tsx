import React, { useContext } from "react";
import { DispatchPageContext } from "../Context.tsx";

export default function Home() {
  const dispatchPage = useContext(DispatchPageContext);
  return (
    <div className="w-full bg-white pb-14 text-black dark:bg-zinc-800">
      <div className="grid w-full grid-cols-2 gap-x-5 gap-y-6 px-4 pt-40 text-center lg:px-28">
        <p className="col-span-2 text-5xl font-bold text-neutral-900/80 dark:text-neutral-100">
          React TypeScript Cheatsheets
        </p>
        <p className="col-span-2 text-2xl text-neutral-900/80 dark:text-neutral-100">
          Cheatsheets for experienced React developers getting started
          with TypeScript
        </p>
        <button 
          className="button-blue col-span-2 mt-5 w-full rounded-lg py-2.5 text-xl font-bold md:col-span-1"
          onClick={() => dispatchPage?.({ type: "change_page", payload: "docs" })}
        >
          Getting Started
        </button>
        <a href="https://discord.com/invite/wTGS5z9" target="_blank" rel="noreferrer" className="button-white col-span-2 -mt-2 w-full rounded-lg py-2.5 text-xl font-bold md:col-span-1 md:mt-5">
          Join Official Discord
        </a>
      </div>
    </div>
  )
}