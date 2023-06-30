import React, { useEffect, useRef } from "react";

export default function ButtonScrollToTop({ show }: { show: boolean }) {
  return (
    <button
      className={`${show ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } fixed bottom-6 right-6 h-12 w-12 rounded-full bg-neutral-200 transition-all duration-200 hover:bg-neutral-300 dark:bg-[rgb(68,73,80)] dark:hover:bg-[rgb(96,103,112)]`}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <svg
        className="mx-auto w-6 fill-neutral-600 dark:fill-neutral-300"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
      >
        <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
      </svg>
    </button>
  );
}
