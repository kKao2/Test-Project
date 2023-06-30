import React, { useContext, useEffect, useRef, useState } from "react";
import { DispatchPageContext } from "../Context.tsx";

export default function DocsLink({
  content,
  canOpen,
  dispatchLink,
  isActive,
  children,
}) {
  const [isOpenMenuList, setIsOpenMenuList] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const dispatchPage = useContext(DispatchPageContext);

  // ?------------------ TỰ ĐỘNG MỞ BASIC -> SETUP KHI MỚI HIỂN THỊ MENU LIST ------------------? //
  // ------------------ BASIC/SETUP OPEN FIRST WHEN FIRST OPEN MENU LIST ------------------ //
  useEffect(() => {
    if (content === "Basic") {
      setIsOpenMenuList(true);
    }
  }, [content]);

  // ?------------------ TỰ ĐỘNG ĐÓNG MENU LINK KHI NHẤN VÀO LINK KHÁC ------------------? //
  // ------------------ AUTO CLOSE MENU LIST WHEN CHANGING TO A NEW LINK ------------------ //
  useEffect(() => {
    if (!isActive) {
      setIsOpenMenuList(false);
    } else {
      setIsOpenMenuList(true);
    }
  }, [isActive]);

  // ?------------------ NGĂN KHÔNG CHO THAY ĐỔI BIẾN ISDISPLAYED NẾU NHƯ NHẤN VÀO LINK KHÔNG CÓ NỘI DUNG ------------------? //
  // ------------------ PREVENT OPEN A "NOTHING" LINK ------------------ //
  useEffect(() => {
    if (canOpen === false && isActive === true) {
      dispatchPage?.({
        type: "change_isDisplayed",
        payload: content
      })
    }
  }, [canOpen, isActive])

  return (
    <>
      <button
        className={`${
          isActive ? "text-sky-500" : "text-black dark:text-neutral-100"
        } menu-button`}
        onClick={() => {
          dispatchLink(content);
          setIsOpenMenuList((i) => !i);
        }}
      >
        {content}
        {canOpen && (
          <svg
            className={`${
              isOpenMenuList ? "rotate-90" : "rotate-0"
            } absolute right-1.5 top-1.5 w-5 transition-transform duration-300`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        )}
      </button>
      <div
        ref={ref}
        className={`${
          isOpenMenuList ? "max-h-[1000px] menu-open" : "max-h-0 menu-close"
        }  ml-4 overflow-hidden`}
      >
        {children}
      </div>
    </>
  );
}
