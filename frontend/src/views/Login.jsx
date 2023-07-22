import React, { createRef, useState } from "react";
import { Link } from "react-router-dom";
import novaAxiosClient from "../config/novaAxiosClient";
import { useStateContext } from "../context/novaContextProvider";

export default function Login() {
    const { setUser, setToken } = useStateContext();
    const [errors, setErrors] = useState(null);
    const emailRef = createRef();
    const passwordRef = createRef();

    //login form submit
    const onSubmit = (e) => {
        e.preventDefault();

        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        novaAxiosClient
            .post("/login", payload)
            .then(({ data }) => {
                //set session token & user data
                setUser(data.user);
                setToken(data.token);
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                    console.log(response);
                }
            });
    };

    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 border p-5 m-3">
                        <div class="text-center m-2">
                            <img src="https://www.worth.com/wp-content/uploads/2019/10/shutterstock_1081351790.jpg" class="rounded logo" alt="..." />
                        </div>
                        {errors && (
                            <div>
                                <div className="alert alert-danger alert-dismissible fade show">
                                    <h4 className="alert-heading">
                                        <i className="bi-exclamation-octagon-fill"></i>{" "}
                                        Oops! Something went wrong.
                                    </h4>
                                    <hr />

                                    {Object.keys(errors).map((key) => (
                                        <p key={key}>{errors[key][0]}</p>
                                    ))}
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="alert"
                                    ></button>
                                </div>
                            </div>
                        )}
                        <form onSubmit={onSubmit}>
                            <div className="form-outline mb-4">
                                <input
                                    ref={emailRef}
                                    type="email"
                                    id="email"
                                    className="form-control form-control-lg"
                                    placeholder="Enter a valid email address"
                                />
                                <label className="form-label" htmlFor="email">
                                    Email address
                                </label>
                            </div>

                            <div className="form-outline mb-3">
                                <input
                                    ref={passwordRef}
                                    type="password"
                                    id="password"
                                    className="form-control form-control-lg"
                                    placeholder="Enter password"
                                />
                                <label
                                    className="form-label"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                    <input
                                        className="form-check-input me-2"
                                        type="checkbox"
                                        value=""
                                        id="form2Example3"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="form2Example3"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">
                                    Forgot password?
                                </a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg"
                                >
                                    Login
                                </button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">
                                    Don't have an account?{" "}
                                    <a href="/register" className="link-danger">
                                        Register
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
