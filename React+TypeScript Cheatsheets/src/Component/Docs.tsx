import React, { useContext, useEffect, useState } from "react";
import DocsMenu from "./DocsMenu.tsx";
import { StatePageContext } from "../Context.tsx";
import Setup from "./Docs/Setup.tsx";
import TypingComponentProps from "./Docs/Typing_Component_Props.tsx";
import { docs } from "./Docs/data.tsx";
import ButtonScrollToTop from "./Docs/ButtonScrollToTop.tsx";

export default function Docs() {
  const statePage = useContext(StatePageContext);
  const [showButtonScrollToTop, setShowButtonScrollToTop] = useState<boolean>(false);

  // ------------------ AUTO SCROLL TO TOP WHEN LOADING NEW DISPLAYED LINK ------------------ //
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [statePage?.isDisplayed])

  // ------------------ DETECT SCROLL DIRECTION TO SHOW BUTTON SCROLL TO TOP ------------------ //
  useEffect(() => {
    let lastScrollTop: number = window.scrollY || document.documentElement.scrollTop;
    function detectDirection(): void {
      const scrollTopPosition: number = window.scrollY || document.documentElement.scrollTop;
      if (scrollTopPosition < lastScrollTop) {
        setShowButtonScrollToTop(true);
      } else if (scrollTopPosition > lastScrollTop) {
        setShowButtonScrollToTop(false);
      }
      lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
    }
    window.addEventListener("scroll", detectDirection);
    return () => window.removeEventListener("scroll", detectDirection);
  }, [])

  return (
    <div className="w-full bg-white pt-14 dark:bg-[rgb(27,27,29)]">
      <div className="grid grid-cols-5">
        <div className="menu-list col-span-1 hidden flex-col border-r border-neutral-300 px-1.5 py-2 dark:border-neutral-700 lg:flex">
          <div className="sticky top-16">
            <DocsMenu docs={docs} />
          </div>
        </div>
        <div className="col-span-5 lg:col-span-3 ">
          <article className="px-4 py-6">
            {statePage?.isDisplayed === "Setup" && <Setup />}
            {statePage?.isDisplayed === "Typing Component Props" && <TypingComponentProps />}
          </article>
        </div>
      </div>
      <ButtonScrollToTop show={showButtonScrollToTop} />
    </div>
  );
}
