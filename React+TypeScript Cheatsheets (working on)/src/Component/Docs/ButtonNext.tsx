import React from "react";

export default function ButtonNext({ content, handleOnClick }: { content: string, handleOnClick: () => void }) {
  if (content)
    return (
      <button
        className="h-full w-full rounded-lg border-2 border-neutral-300 px-4 py-3.5 transition-colors hover:border-sky-500 dark:border-neutral-600 dark:hover:border-sky-500"
        onClick={() => {
          handleOnClick();
        }}
      >
        <p className="text-right font-semibold">Next</p>
        <div className="float-right flex flex-row">
          <p className="text-right font-semibold text-sky-500">
            {content}
            <svg
              className="float-right ml-0.5 mt-1.5 w-3.5 fill-sky-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.21 14.77a.75.75 0 01.02-1.06L14.168 10 10.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M4.21 14.77a.75.75 0 01.02-1.06L8.168 10 4.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </p>
        </div>
      </button>
    );
}
