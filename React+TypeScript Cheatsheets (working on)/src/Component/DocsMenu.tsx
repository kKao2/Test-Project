import React, { useContext, useState } from "react";
import DocsLink from "./DocsLink.tsx";
import { DocsType } from "./Docs/data.tsx";
import { StatePageContext, DispatchPageContext } from "../Context.tsx";

export default function DocsMenu({ docs }: { docs: DocsType }) {
  const statePage = useContext(StatePageContext);
  const dispatchPage = useContext(DispatchPageContext);

  function dispatchLink_1(link: string) {
    dispatchPage?.({
      type: "change_link_1",
      payload: link
    })
  }
  function dispatchLink_2(link: string) {
    dispatchPage?.({
      type: "change_link_2",
      payload: link
    })
    if (statePage?.link_2 !== link) {
      dispatchPage?.({
        type: "change_link_3",
        payload: ""
      })
    }
  }
  function dispatchLink_3(link: string) {
    dispatchPage?.({
      type: "change_link_3",
      payload: link
    })
  }

  return (
    <>
      {docs.map((l) => {
        return (
          <DocsLink
            key={l.name}
            content={l.name}
            canOpen={l.canOpen}
            dispatchLink={dispatchLink_1}
            isActive={statePage?.link_1 === l.name}
          >
            {l.child?.map((l) => {
              return (
                <DocsLink
                  key={l.name}
                  content={l.name}
                  canOpen={l.canOpen}
                  dispatchLink={dispatchLink_2}
                  isActive={statePage?.link_2 === l.name}
                >
                  {l.child?.map((l) => {
                    return (
                      <DocsLink
                        key={l.name}
                        content={l.name}
                        canOpen={l.canOpen}
                        dispatchLink={dispatchLink_3}
                        isActive={statePage?.link_3 === l.name}
                      >
                        {" "}
                      </DocsLink>
                    );
                  })}
                </DocsLink>
              );
            })}
          </DocsLink>
        );
      })}
    </>
  );
}
