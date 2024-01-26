import RegisterForm from "@/components/clients/RegisterForm";
import React from "react";

export const metadata = {
  title: "Register",
};

const page = () => {
  return (
    <div className="row w-100 mt-5">
      <RegisterForm />
    </div>
  );
};

export default page;
