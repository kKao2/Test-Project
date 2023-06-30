import React, { useContext } from "react";
import { StatePageContext, DispatchPageContext } from "../Context.tsx";

export default function ModalLink({ content }: {content: string}) {
  const statePage = useContext(StatePageContext);
  const dispatchPage = useContext(DispatchPageContext);
  return (
    <button
      className={`${statePage?.page === content.toLowerCase() && "text-sky-500"} transition-colors w-full self-center px-3 text-left first:mt-5 lg:first:mt-0 hover:text-sky-500`}
      onClick={() => dispatchPage?.({ type: "change_page", payload: content.toLowerCase() })}
    >
      {content}
    </button>
  )
}