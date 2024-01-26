"use client";

import React, { useState } from "react";
import { createContext } from "react";

export const Context = createContext({ user: {} });

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
