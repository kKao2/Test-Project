import React, { useEffect, useReducer, useRef, useState } from "react";
import { DispatchPageContext, StatePageContext } from "./Context.tsx";
import NavComponent from "./Component/HomeNav.tsx";
import LogoComponent from "./Component/Logo.tsx";
import HomeComponent from "./Component/Home.tsx";
import FooterComponent from "./Component/Footer.tsx";
import HelpComponent from "./Component/Help.tsx";
import { initialPage, pageReducer } from "./pageReducer.tsx";
import DocsComponent from "./Component/Docs.tsx";
import DocsMenu from "./Component/DocsMenu.tsx";
import { docs } from "./Component/Docs/data.tsx";

export default function App() {
  const [themeDark, setThemeDark] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [statePage, dispatchPage] = useReducer(pageReducer, initialPage);
  const modalRef = useRef<HTMLDivElement>(null);

  // ?------------------ CHECK THEME ĐANG DÙNG CỦA WINDOW RỒI ÁP DỤNG VÀO THEME WEB ------------------? //
  // ------------------ DETECT WINDOW'S THEME USER IS USING THEN SET THEME FOR WEB ------------------ //
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setThemeDark(true);
    } else {
      setThemeDark(false);
    }
  }, []);
  function themeChange(): void {
    setThemeDark((d) => !d);
  }

  // ------------------ HIDE MODAL WHEN TRANSITION DONE  ------------------ //
  useEffect(() => {
    if (showModal) {
      const timeOut = setTimeout(() => {
        modalRef.current?.classList.remove("-z-10");
        modalRef.current?.classList.add("z-10");
      }, 300);
      return () => clearTimeout(timeOut);
    } else {
      const timeOut = setTimeout(() => {
        modalRef.current?.classList.remove("z-10");
        modalRef.current?.classList.add("-z-10");
      }, 300);
      return () => clearTimeout(timeOut);
    }
  }, [showModal]);

  // ?------------------ TỰ ĐỘNG ĐÓNG MODAL KHI CHUYỂN SANG LINK MỚI CÓ NỘI DUNG KHÁC  ------------------? //
  // ------------------ CLOSE MODAL WHEN CHANGING TO A NEW LINK  ------------------ //
  useEffect(() => {
    setShowModal(false);
  }, [statePage.page, statePage.isDisplayed]);

  return (
    <StatePageContext.Provider value={statePage}>
      <DispatchPageContext.Provider value={dispatchPage}>
        <div className={themeDark ? "dark" : "light"}>
          <div className="h-screen w-full font-sans antialiased bg-slate-700">
            {/* ================== MODAL NAVBAR ================== */}
            <div
              ref={modalRef}
              className={`${showModal ? "opacity-100" : "opacity-0"
                } fixed h-full w-full bg-black/40 transition-opacity duration-300`}
              onClick={() => {
                setShowModal(false);
              }}
            >
              {/* --------- Main Modal --------- */}
              <div
                className={`${showModal ? "translate-x-0" : "-translate-x-full"
                  } relative z-20 h-full w-4/5 bg-white p-3 transition-transform duration-300 dark:bg-zinc-800 dark:text-neutral-100 md:w-3/5`}
                onClick={(e) => e.stopPropagation()} // ---- ngăn hiệu ứng nổi bọt ---- //
              >
                <div className="w-full border-b border-solid border-neutral-400 pb-3">
                  <LogoComponent />
                </div>
                {statePage.page === "docs" ? (
                  <DocsMenu docs={docs} />
                ) : (
                  <NavComponent
                    themeDark={themeDark}
                    themeChange={themeChange}
                    hidden={false}
                  />
                )}
              </div>
            </div>

            {/* ================== NAVBAR ================== */}
            <div
              className={`${showModal ? "opacity-0" : "opacity-100"
                } fixed w-full bg-neutral-100 shadow transition-opacity duration-300 dark:bg-zinc-800 dark:text-neutral-100`}
            >
              <nav className="flex w-full justify-between px-4 py-3 lg:px-14">
                {/* --------- Modal Button --------- */}
                <button
                  className="mr-2 block lg:hidden"
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  <svg
                    className="w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>

                {/* --------- Logo --------- */}
                <LogoComponent />

                {/* --------- Nav Link --------- */}
                <NavComponent
                  themeDark={themeDark}
                  themeChange={themeChange}
                  hidden={true}
                />

                {/* --------- Search Button --------- */}
                <button className="relative ml-4 h-8 w-8 rounded-full border-2 border-solid border-transparent bg-neutral-200 transition-colors hover:border-sky-500 dark:bg-black lg:h-9 lg:w-28 lg:pr-4">
                  <svg
                    className="absolute left-1 top-1 w-5 lg:left-2 lg:top-1.5 lg:w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                  <p className="hidden text-right text-lg text-neutral-400 dark:text-neutral-400/80 lg:block">
                    Search
                  </p>
                </button>
              </nav>
            </div>

            {/* ================== BODY ================== */}

            {statePage.page === "home" && <HomeComponent />}
            {statePage.page === "docs" && <DocsComponent />}
            {statePage.page === "help" && <HelpComponent />}

            {/* ================== FOOTER ================== */}

            <FooterComponent />
          </div>
        </div>
      </DispatchPageContext.Provider>
    </StatePageContext.Provider>
  );
}
