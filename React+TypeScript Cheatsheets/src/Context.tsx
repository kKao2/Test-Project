import { createContext } from "react";
import { ActionType, InitialPageType } from "./pageReducer";

export const StatePageContext = createContext<InitialPageType | null>(null);
export const DispatchPageContext = createContext<React.Dispatch<ActionType> | null>(null);