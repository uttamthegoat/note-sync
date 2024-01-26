"use client";

import React from "react";
import Link from "next/link";

const RegisterForm = () => {
  return (
    <>
      <form className="col-sm-6 col-10 mx-auto">
        <div className="mb-3">
          <label htmlFor="exampleInputUser1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUser1"
            aria-describedby="nameHelp"
            placeholder="Enter your name..."
          />
        </div>
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
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
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
          <button type="submit" className="btn btn-danger">
            Submit
          </button>
        </div>
      </form>
      <h4 className="col-8 mx-auto text-center">OR</h4>
      <div className="col-8 mx-auto d-flex justify-content-center">
        <Link href={"/login"} className="btn btn-outline-primary">
          Login
        </Link>
      </div>
    </>
  );
};

export default RegisterForm;
