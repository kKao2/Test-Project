import React, { createContext } from "react";
import { stateReducer, ACTIONTYPE } from "./counterReducer";

type ThemeType = "light" | "dark";

export const StateCounterContext = createContext<stateReducer | null>(null);
export const DispatchCounterContext = createContext<React.Dispatch<ACTIONTYPE> | null>(null);
export const ThemeContext = createContext<ThemeType>("light");
export const AuthorContext = createContext<string>("Author's name");