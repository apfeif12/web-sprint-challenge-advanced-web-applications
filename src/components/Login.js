import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
    const [values, setValues] = useState({
        username: "",
        password: "",
    });

    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/api/login", values)
            .then((res) => {
                console.log("token", res);
                localStorage.setItem("token", res.data.payload);
                props.history.push("/bubblepage");
            })
            .catch((errorMessage) => {
                console.log({ errorMessage });
            });
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <label>
                    username
                    <input
                        type="text"
                        name="username"
                        onChange={onChange}
                        value={values.username}
                        placeholder="Username"
                    />
                </label>
                <label>
                    password
                    <input
                        type="password"
                        name="password"
                        onChange={onChange}
                        value={values.password}
                        placeholder="Password"
                    />
                </label>
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
