import React, { memo } from "react";
import logo from "../logo.png";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8 place-items-start bg-slate-700 px-4 py-8 text-neutral-100 lg:px-28">
      {/* --------- Footer Col-1 --------- */}
      <div className="col-span-1">
        <p className="font-bold first:mb-5">Docs</p>
        <nav className="space-y-2">
          <a href="" className="normal-link block">
            Introduction
          </a>
          <a href="" className="normal-link block">
            High Order Component (HOC)
          </a>
          <a href="" className="normal-link block">
            Advanced Guides
          </a>
          <a href="" className="normal-link block">
            Migrating
          </a>
        </nav>
      </div>

      {/* --------- Footer Col-2 --------- */}
      <div className="col-span-1">
        <p className="font-bold first:mb-5">Community</p>
        <nav className="space-y-2">
          <a href="https://stackoverflow.com/questions/tagged/typescript" target="_blank" rel="noreferrer" className="normal-link block">
            Stack Overflow
            <svg
              className="ml-0.5 inline w-4 align-baseline"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
          <a href="" className="normal-link block">
            User Showcase
          </a>
          <a href="" className="normal-link block">
            Help
          </a>
          <a href="" className="normal-link block">
            Contributors
          </a>
          <a href="" className="normal-link block">
            Contributing
          </a>
        </nav>
      </div>

      {/* --------- Footer Col-3 --------- */}
      <div className="col-span-1">
        <p className="font-bold first:mb-5">More</p>
        <nav className="space-y-3">
          <a href="https://github.com/typescript-cheatsheets/react" target="_blank" className="normal-link block">
            GitHub
            <svg
              className="ml-0.5 inline w-4 align-baseline"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>

          {/* --------- GitHub Button --------- */}
          <a href="" className="flex flex-row">
            <div className="flex flex-row items-center gap-x-1 rounded-l bg-white  px-1.5 py-0.5 ring-2 ring-inset ring-slate-300">
              <svg
                className="w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
              <p className="text-xs font-semibold text-black">Star</p>
            </div>
            <p className="rounded-r bg-zinc-800 px-1 py-0.5 text-xs font-semibold text-neutral-200">
              41k
            </p>
          </a>

          {/* --------- Discord Button --------- */}
          <a href="" className="flex flex-row">
            <div className="flex rounded-l bg-[#6c7ebb] px-1.5 py-0.5">
              <svg
                className="w-3.5 items-center fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
              </svg>
            </div>
            <p className="rounded-r bg-[#7488cf] px-1 py-0.5 text-xs text-white">
              7329 online
            </p>
          </a>

          {/* --------- Twitter Button --------- */}
          <a
            href=""
            className="flex flex-row gap-x-1 rounded bg-white px-1 py-0.5 ring-2 ring-inset ring-slate-300"
          >
            <svg
              className="w-3.5 fill-[#3BA9EE;]"
              viewBox="328 355 335 276"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 630, 425A 195, 195 0 0 1 331, 600A 142, 142 0 0 0 428, 570A  70,  70 0 0 1 370, 523A  70,  70 0 0 0 401, 521A  70,  70 0 0 1 344, 455A  70,  70 0 0 0 372, 460A  70,  70 0 0 1 354, 370A 195, 195 0 0 0 495, 442A  67,  67 0 0 1 611, 380A 117, 117 0 0 0 654, 363A  65,  65 0 0 1 623, 401A 117, 117 0 0 0 662, 390A  65,  65 0 0 1 630, 425Z" />
            </svg>
            <p className="text-xs font-semibold text-black">
              Help spread the world!
            </p>
          </a>
        </nav>
      </div>

      {/* --------- Copyright --------- */}
      <div className="col-span-1 md:col-span-3 place-self-center">
        <div className="flex flex-col place-items-center gap-y-4">
          <img className="w-16" src={logo} alt="logo" />
          <p className="text-center">Copyright © 2023 TypeScript Cheatsheets</p>
        </div>
      </div>
    </div>
  )
}

export default memo(Footer);