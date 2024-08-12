"use client";

import { layoutProps } from "@src/types/props";
import { useState, createContext } from "react";

export const TabContext = createContext({
  tab: "rec",
  setTab: (value: "rec" | "fol") => {},
});

export default function TabProvider({ children }: layoutProps) {
  const [tab, setTab] = useState("rec");

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
