import React from "react";
import NavDocs from "./NavDocs.tsx";
import Header1 from "./Header1.tsx";

export default function TypingComponentProps() {
  return (
    <div className="text-black dark:text-neutral-100">
      <NavDocs
        nav_1="Basic"
        nav_2="Getting Started"
        nav_3="Typing Component Props"
      />
      <p className="mt-6 text-5xl font-bold">Typing Component Props</p>
      <p className="mt-8">
        This is intended as a basic orientation and reference for React
        developers familiarizing with TypeScript.
      </p>

      {/* Basic Prop Types Examples */}
      <Header1 content="Basic Prop Types Examples" />
      <p className="mt-6">
        A list of TypeScript types you will likely use in a React+TypeScript
        app:
      </p>

      {/* Code Block */}
      <div className="normal-prose pt-0">
        <pre className="whitespace-nowrap bg-[rgb(41,45,62)]">
          <span>
            type <span className="text-[--code-orange]">AppProps</span> = &#123;
          </span>{" "}
          <br />
          <div className="ml-4">
            <span>
              message<span className="text-[--code-light-blue]">:</span>{" "}
              <span className="text-[--code-blue]">string</span>;
            </span>
            <br />
            <span>
              count<span className="text-[--code-light-blue]">:</span>{" "}
              <span className="text-[--code-blue]">number</span>;
            </span>
            <br />
            <span>
              disabled<span className="text-[--code-light-blue]">:</span>{" "}
              <span className="text-[--code-blue]">boolean</span>;
            </span>
            <br />
            <span className="text-[--code-gray]">/** array of a type! */</span>
            <br />
            <span>
              status<span className="text-[--code-light-blue]">:</span>{" "}
              <span className="text-[--code-green]">"waiting"</span> |
              <span className="text-[--code-green]"> "success"</span>;
            </span>
            <br />
            <span className="text-[--code-gray]">
              /** an object with known properties (but could have more at
              runtime) */
            </span>
            <br />
            <span>
              obj<span className="text-[--code-light-blue]">:</span>{" "}
              <span className="text-[--code-violet]">&#123;</span>
            </span>
            <br />
            <span className="ml-4">
              id<span className="text-[--code-light-blue]">:</span>{" "}
              <span className="text-[--code-blue]">string</span>;
            </span>
            <br />
            <span className="ml-4">
              title<span className="text-[--code-light-blue]">:</span>{" "}
              <span className="text-[--code-blue]">string</span>;
            </span>
            <br />
            <span className="text-[--code-violet]">&#125;</span>;<br />
            <span>
              objArr<span className="text-[--code-light-blue]">:</span>{" "}
              <span className="text-[--code-violet]">&#123;</span>
            </span>
            <br />
            <span className="ml-4">
              id<span className="text-[--code-light-blue]">:</span>{" "}
              <span className="text-[--code-blue]">string</span>;
            </span>
            <br />
            <span className="ml-4">
              title<span className="text-[--code-light-blue]">:</span>{" "}
              <span className="text-[--code-blue]">string</span>;
            </span>
            <br />
            <span className="text-[--code-violet]">&#125;[]</span>;<br />
            <span className="text-[--code-gray]">
              /** any non-primitive value - can't access any properties (NOT
              COMMON but useful as placeholder) */
            </span>
            <br />
            <span>
              obj2<span className="text-[--code-light-blue]">:</span> object;
            </span>
            <br />
            <span className="text-[--code-gray]">
              /** an interface with no required properties - (NOT COMMON, except
              for things like `React.Component&#60;&#123;&#125;, State&#62;`) */
            </span>
            <br />
            <span>
              obj3<span className="text-[--code-light-blue]">:</span>{" "}
              <span className="text-[--code-violet]">&#123;&#125;</span>;
            </span>
            <br />
            <span className="text-[--code-gray]">
              /** a dict object with any number of properties of the same type
              */
            </span>
            <br />
            <span>
              dict1<span className="text-[--code-light-blue]">:</span>{" "}
              <span className="text-[--code-violet]">&#123;</span>
            </span>
            <br />
            <span className="ml-4">
              <span className="text-[--code-violet]">[</span>key
              <span className="text-[--code-light-blue]">:</span>{" "}
              <span className="text-[--code-blue]">string</span>
              <span className="text-[--code-violet]">]</span>
              <span className="text-[--code-light-blue]">:</span> MyTypeHere;
            </span>
            <br />
            <span className="text-[--code-violet]">&#125;</span>;<br />
            <span className="">
              dict2<span className="text-[--code-light-blue]">:</span> Record
              <span className="text-[--code-light-blue]">&#60;</span>
              <span className="text-[--code-blue]">string</span>, MyTypeHere
              <span className="text-[--code-light-blue]">&#62;</span>;
            </span>
            <span className="ml-2 text-[--code-gray]">
              // equivalent to dict1
            </span>
            <span className="text-[--code-gray]">
              /** function that doesn't take or return anything (VERY COMMON) */
            </span>
            <br />
            <span className="">
              <span className="text-[--code-blue]">onClick</span>
              <span className="text-[--code-light-blue]">:</span>
              <span className="text-[--code-violet]"> ()</span>
              <span className="text-[--code-light-blue]"> =&#62;</span> void;
            </span>
            <br />
            <span className="text-[--code-gray]">
              /** function with named prop (VERY COMMON) */
            </span>
            <br />
            <span className="">
              <span className="text-[--code-blue]">onChange</span>
              <span className="text-[--code-light-blue]">:</span>
              <span className="text-[--code-violet]"> (</span>
              id<span className="text-[--code-light-blue]">:</span>
              <span className="text-[--code-blue]"> number</span>
              <span className="text-[--code-violet]">)</span>
              <span className="text-[--code-light-blue]"> =&#62;</span> void;
            </span>
            <br />
            <span className="text-[--code-gray]">
              /** function type syntax that takes an event (VERY COMMON) */
            </span>
            <br />
            <span>
              <span className="text-[--code-blue]">onChange</span>:{" "}
              <span className="text-[--code-violet]"> (</span>event
              <span className="text-[--code-light-blue]">:</span>{" "}
              React.ChangeEvent
              <span className="text-[--code-light-blue]">&#60;</span>
              HTMLInputElement
              <span className="text-[--code-light-blue]">&#62;</span>
              <span className="text-[--code-violet]">)</span>
              <span className="text-[--code-light-blue]"> =&#62;</span> void;
            </span>
            <br />
            <span className="text-[--code-gray]">
              /** alternative function type syntax that takes an event (VERY
              COMMON) */
            </span>
            <br />
            <span>
              <span className="text-[--code-blue]">onChange</span>:{" "}
              <span className="text-[--code-violet]"> (</span>event
              <span className="text-[--code-light-blue]">:</span>{" "}
              React.MouseEvent
              <span className="text-[--code-light-blue]">&#60;</span>
              HTMLButtonElement
              <span className="text-[--code-light-blue]">&#62;</span>
              <span className="text-[--code-violet]">)</span>
              <span className="text-[--code-light-blue]">:</span> void;
            </span>
            <br />
            <span className="text-[--code-gray]">
              /** any function as long as you don't invoke it (not recommended)
              */
            </span>
            <br />
            <span>
              onSomething<span className="text-[--code-light-blue]">:</span>
              <span className="text-[--code-orange]"> Function</span>;
            </span>
            <br />
            <span className="text-[--code-gray]">
              /** an optional prop (VERY COMMON!) */
            </span>
            <br />
            <span>
              optional<span className="text-[--code-light-blue]">?:</span>{" "}
              OptionalType;
            </span>
            <br />
            <span className="text-[--code-gray]">
              /** when passing down the state setter function returned by
              `useState` to a child component. `number` is an example, swap out
              with whatever the type of your state */
            </span>
            <br />
            <span>
              setState<span className="text-[--code-light-blue]">:</span>{" "}
              React.Dispatch
              <span className="text-[--code-light-blue]">&#60;</span>
              React.SetStateAction
              <span className="text-[--code-light-blue]">&#60;</span>
              <span className="text-[--code-blue]">number</span>
              <span className="text-[--code-light-blue]">&#62;</span>
              <span className="text-[--code-light-blue]">&#62;</span>;
            </span>
            <br />
          </div>
          <span>
            <span className="text-[--code-violet]">&#125;</span>;
          </span>
        </pre>
      </div>

      {/* object as the non-primitive type */}
      <div
        id="object as the non-primitive type"
        className="flex scroll-mt-16 flex-row items-center"
      >
        <p className="text-2xl font-semibold">
          <code className="code">object</code> as the non-primitive type
        </p>
        <a
          href="#object as the non-primitive type"
          className="px-2 text-3xl font-bold text-transparent hover:text-sky-500 hover:underline"
        >
          #
        </a>
      </div>
      <div className="normal-prose pt-0">
        <p>
          <code className="code">object</code>
          <span>
            {" "}
            is a common source of misunderstanding in TypeScript. It does not
            mean "any object" but rather "any non-primitive type", which means
            it represents anything that is not{" "}
          </span>
          <code className="code">number</code>
          <span>, </span>
          <code className="code">string</code>
          <span>, </span>
          <code className="code">boolean</code>
          <span>, </span>
          <code className="code">symbol</code>
          <span>, </span>
          <code className="code">null</code>
          <span> or </span>
          <code className="code">undefined</code>.
        </p>
        <p>
          Typing "any non-primitive value" is most likely not something that you
          should do much in React, which means you will probably not use{" "}
          <span>
            <code className="code">object</code> much.
          </span>
        </p>
      </div>
      <div
        id="object as the non-primitive type"
        className="flex scroll-mt-16 flex-row items-center"
      >
        <p className="text-2xl font-semibold">
          Empty interface <code className="code">&#123;&#125;</code> and{" "}
          <code className="code">object</code>
        </p>
        <a
          href="#object as the non-primitive type"
          className="px-2 text-3xl font-bold text-transparent hover:text-sky-500 hover:underline"
        >
          #
        </a>
      </div>
      <div className="normal-prose pt-0">
        <p>
          An empty interface, <code className="code">&#123;&#125;</code> and{" "}
          <code className="code">object</code> all represent "any non-nullish
          value"—not "an empty object" as you might think.{" "}
          <a
            href="https://typescript-eslint.io/rules/no-empty-interface/"
            target="_blank"
            rel="noopener noreferrer"
            className="normal-link text-sky-500 no-underline"
          >
            Using these types is a common source of misunderstanding and is not
            recommended
          </a>
          .
        </p>
      </div>
      <div className="normal-prose pt-0">
        <pre className="whitespace-nowrap bg-[rgb(41,45,62)]">
          <span>
            interface{" "}
            <span className="text-[--code-orange]">AnyNonNullishValue</span>{" "}
            <span className="text-[--code-violet]">&#123;&#125;</span>
            <span className="ml-2 text-[--code-gray]">
              // equivalent to `type AnyNonNullishValue = &#123;&#125;` or `type
              AnyNonNullishValue = Object`
            </span>
          </span>
          <br />
          <br />
          <span>
            let value
            <span className="text-[--code-light-blue]">:</span>{" "}
            AnyNonNullishValue;
          </span>
          <br />
          <br />
          <span className="text-[--code-gray]">
            // these are all fine, but might not be expected
          </span>
          <br />
          <span>
            value <span className="text-[--code-light-blue]">=</span>{" "}
            <span className="text-[--code-orange]">1</span>;
          </span>
          <br />
          <span>
            value <span className="text-[--code-light-blue]">=</span>{" "}
            <span className="text-[--code-green]">"foo"</span>;
          </span>
          <br />
          <span>
            <span className="text-[--code-blue]">value</span>{" "}
            <span className="text-[--code-light-blue]">=</span>{" "}
            <span className="text-[--code-violet]">()</span>{" "}
            <span className="text-[--code-light-blue]">=&#62;</span>{" "}
            <span className="text-[--code-blue]">alert</span>
            <span className="text-[--code-violet]">(</span>
            <span className="text-[--code-green]">"foo"</span>
            <span className="text-[--code-violet]">)</span>;
          </span>
          <br />
          <span>
            value <span className="text-[--code-light-blue]">=</span>{" "}
            <span className="text-[--code-violet]">&#123;&#125;</span>;
          </span>
          <br />
          <span>
            value <span className="text-[--code-light-blue]">=</span>{" "}
            <span className="text-[--code-violet]">&#123;</span> foo
            <span className="text-[--code-light-blue]">:</span>{" "}
            <span className="text-[--code-green]">"bar"</span>{" "}
            <span className="text-[--code-violet]">&#125;</span>;
          </span>
          <br />
          <br />
          <span className="text-[--code-gray]">// these are errors</span>
          <br />
          <span>
            value <span className="text-[--code-light-blue]">=</span> undefined;
          </span>
          <br />
          <span>
            value <span className="text-[--code-light-blue]">=</span> null;
          </span>
          <br />
        </pre>
      </div>
    </div>
  );
}
