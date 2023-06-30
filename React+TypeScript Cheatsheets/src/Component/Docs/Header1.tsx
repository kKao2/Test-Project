import React from "react";

export default function Header1({ content }: { content: string }) {
  return (
    <div
      id={content}
      className="mt-10 flex flex-row scroll-mt-16"
    >
      <p className="text-3xl font-bold">{content}</p>
      <a
        href={"#" + content}
        className="px-2 text-3xl font-bold text-transparent hover:text-sky-500 hover:underline"
      >
        #
      </a>
    </div>
  )
}