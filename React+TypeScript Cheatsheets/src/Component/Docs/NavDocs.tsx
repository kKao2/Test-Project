import React, { useContext } from "react";
import { DispatchPageContext } from "../../Context.tsx";

export default function NavDocs({
  nav_1,
  nav_2,
  nav_3,
}: {
  nav_1: string,
  nav_2: string,
  nav_3: string,
}) {
  const dispatchPage = useContext(DispatchPageContext);
  return (
    <div className="flex flex-row items-center">
      <button
        className="group rounded-full px-2.5 py-1 hover:bg-neutral-200 dark:hover:bg-neutral-700"
        onClick={() => dispatchPage?.({ type: "change_page", payload: "home" })}
      >
        <svg
          className="w-3.5 fill-black group-hover:fill-sky-500 dark:fill-neutral-100"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 576 512"
        >
          <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
        </svg>
      </button>
      <svg
        className="mx-3 w-1.5 fill-neutral-500"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 320 512"
      >
        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
      </svg>
      <p className="px-2.5 py-1 text-xs text-black dark:text-neutral-100">
        {nav_1}
      </p>
      <svg
        className="mx-3 w-1.5 fill-neutral-500"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 320 512"
      >
        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
      </svg>
      <p className="px-2.5 py-1 text-xs text-black dark:text-neutral-100">
        {nav_2}
      </p>
      {nav_3 !== "" && (
        <>
          <svg
            className="mx-3 w-1.5 fill-neutral-500"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
          <p className="px-2.5 py-1 text-xs text-black dark:text-neutral-100">
            {nav_3}
          </p>
        </>
      )}
    </div>
  );
}
