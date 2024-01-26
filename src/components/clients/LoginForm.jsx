"use client";

import React from "react";
import Link from "next/link";

const LoginForm = () => {
  return (
    <>
      <form className="col-sm-6 col-10 mx-auto">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your email..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter your password..."
          />
        </div>
        <div className="d-flex justify-content-center mb-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      <h4 className="col-8 mx-auto text-center">OR</h4>
      <div className="col-8 mx-auto d-flex justify-content-center">
        <Link href={"/register"} className="btn btn-outline-danger">
          Register
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
