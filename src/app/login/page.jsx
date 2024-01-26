import LoginForm from "@/components/clients/LoginForm";
import React from "react";

export const metadata = {
  title: "Login",
};

const page = () => {
  const submitLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="row w-100 mt-5">
      <LoginForm />
    </div>
  );
};

export default page;
