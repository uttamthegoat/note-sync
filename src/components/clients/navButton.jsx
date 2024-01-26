"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavButton = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const logout = () => {
    localStorage.removeItem("next_todo_auth");
    console.log("logout");
  };
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const authData = localStorage.getItem("next_todo_auth");
      setIsAuthenticated(!!authData);
      console.log("rendering");
    }
  }, []);

  return (
    <>
      {!isAuthenticated ? (
        <Link className="nav-link active" aria-current="page" href="/login">
          Login
        </Link>
      ) : (
        <button
          className="nav-link active"
          aria-current="page"
          onClick={logout}
        >
          Logout
        </button>
      )}
    </>
  );
};

export default NavButton;
