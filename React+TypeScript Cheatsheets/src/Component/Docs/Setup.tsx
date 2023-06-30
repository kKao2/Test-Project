import React, { useContext } from "react";
import NavDocs from "./NavDocs.tsx";
import Header1 from "./Header1.tsx";
import ButtonNext from "./ButtonNext.tsx";
import { DispatchPageContext } from "../../Context.tsx";

export default function Setup() {
  const dispatchPage = useContext(DispatchPageContext);

  function nextLink() {
    dispatchPage?.({
      type: "change_link_2",
      payload: "Getting Started"
    });
    dispatchPage?.({
      type: "change_link_3",
      payload: "Typing Component Props"
    })
  }

  return (
    <div className="text-black dark:text-neutral-100">
      <NavDocs nav_1="Basic" nav_2="Setup" nav_3="" />
      <p className="mt-6 text-5xl font-bold">Setup</p>

      {/* Prerequisites */}
      <Header1 content="Prerequisites" />

      {/* Prerequisites content */}
      <div className="normal-prose p-0">
        <p>
          You can use this cheatsheet for reference at any skill level, but
          basic understanding of React and TypeScript is assumed. Here is a list
          of prerequisites:
        </p>
        <ul>
          <li>
            Basic understanding of{" "}
            <a
              className="no-underline"
              href="https://react.dev/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="normal-link text-sky-500">React</span>
            </a>
            .
          </li>
          <li>
            Familiarity with{" "}
            <a
              className="no-underline"
              href="https://www.typescriptlang.org/docs/handbook/2/basic-types.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="normal-link text-sky-500">
                TypeScript Basics
              </span>
            </a>{" "}
            and{" "}
            <a
              className="no-underline"
              href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="normal-link text-sky-500">Everyday Types</span>.
            </a>
          </li>
        </ul>
        <p>
          In the cheatsheet we assume you are using the latest versions of React
          and TypeScript.
        </p>
      </div>

      {/* React and TypeScript starter kits */}
      <Header1 content="React and TypeScript starter kits" />

      {/* React and TypeScript starter kits content */}
      <div className="normal-prose p-0">
        <p>
          React has documentation for{" "}
          <a
            className="no-underline"
            href="https://react.dev/learn/start-a-new-react-project"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="normal-link text-sky-500">
              how to start a new React project
            </span>
          </a>{" "}
          with some of the most popular frameworks. Here's how to start them
          with TypeScript:
        </p>
        <ul>
          <li>
            <a
              className="normal-link text-sky-500 no-underline"
              href="https://nextjs.org/docs/pages/building-your-application/configuring/typescript"
              rel="noopener noreferrer"
              target="_blank"
            >
              Next.js
            </a>
            :<code className="code ml-2">npx create-next-app@latest --ts</code>
          </li>
          <li>
            <a
              className="normal-link text-sky-500 no-underline"
              href="https://remix.run/docs/en/1.18.0/tutorials/blog"
              rel="noopener noreferrer"
              target="_blank"
            >
              Remix
            </a>
            :<code className="code ml-2">npx create-remix@latest</code>
          </li>
          <li>
            <a
              className="normal-link text-sky-500 no-underline"
              href="https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Gatsby
            </a>
            :<code className="code ml-2">npm init gatsby --ts</code>
          </li>
          <li>
            <a
              className="normal-link text-sky-500 no-underline"
              href="https://docs.expo.dev/guides/typescript/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Expo
            </a>
            :
            <code className="code ml-2">
              npx create-react-native-app -t with-typescript
            </code>
          </li>
        </ul>
      </div>

      {/* Try React and TypeScript online */}
      <Header1 content="Try React and TypeScript online" />

      {/* Try React and TypeScript online content */}
      <div className="normal-prose p-0">
        <p>
          There are some tools that let you run React and TypeScript online,
          which can be helpful for debugging or making sharable reproductions.
        </p>
        <ul>
          <li>
            <a
              href=""
              rel="noopener noreferrer"
              className="normal-link text-sky-500 no-underline"
            >
              TypeScript playground
            </a>
          </li>
          <li>
            <a
              href=""
              rel="noopener noreferrer"
              className="normal-link text-sky-500 no-underline"
            >
              StackBlitz
            </a>
          </li>
          <li>
            <a
              href=""
              rel="noopener noreferrer"
              className="normal-link text-sky-500 no-underline"
            >
              CodeSandbox
            </a>
          </li>
        </ul>
      </div>

      {/* Button change to next/previous link */}
      <div className="mt-10 grid w-full grid-cols-1 md:grid-cols-2 gap-x-4">
        <div className="order-last col-span-1">
          <ButtonNext content="Typing Component Props" handleOnClick={nextLink} />
        </div>
        <div className="hidden md:block md:invisible col-span-1 rounded-lg">
          <p>Something</p>
        </div>
      </div>
    </div>
  );
}
