import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./mix.css";

const Register = () => {
    const [passShow, setPassShow] = useState(false);
    const [cpassShow, setCPassShow] = useState(false);

    const [inpval, setInpval] = useState({
        fname: "",
        email: "",
        password: "",
        cpassword: ""
    });

    // console.log(inpval);

    const setval = (e) => {
        //    console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };

    const addUserdata = async(e) => {
        e.preventDefault();

        const { fname, email, password, cpassword } = inpval;

        if (fname === "") {
            alert("please enter your name");
        } else if (email === "") {
            alert("please enter your email");
        } else if (!email.includes("@")) {
            alert("enter valid email");
        } else if (password === "") {
            alert("Enter your password");
        } else if (password.length < 6) {
            alert("password must be 6 character");
        } else if (cpassword === "") {
            alert("Confirm your password");
        } else if (cpassword < 6) {
            alert("password must be 6 character");
        } else if (password !== cpassword) {
            alert("password and confirm password not match");
        }else{
            // console.log("user registration succesfully done");

            const data = await fetch("/register", {
                method: "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify({
                    fname, email, password, cpassword 
                })
            });

            const res = await data.json();
            // console.log(res);

            if(res.status === 201){
                alert("user registration done");
                setInpval({...inpval ,fname: "" , email: "" , password: "" , cpassword: ""});
            }
        }
    }

    return (
        <div>
            <>
                <section>
                    <div className="form_data">
                        <div className="form_heading">
                            <h1>
                                Sign Up
                            </h1>
                            <p style={{ textAlign: "center" }}>We are glad that you will be using projct cloud to manage <br /> your tasks! we hope that you will like it.</p>
                        </div>
                        <form>
                            <div className="form_input">
                                <label htmlFor="email">Name</label>
                                <input type="text" onChange={setval} value={inpval.fname} name="fname" id="frame" placeholder="Enter your name" />
                            </div>
                            <div className="form_input">
                                <label htmlFor="email">Email</label>
                                <input type="email" onChange={setval} value={inpval.email} name="email" id="email" placeholder="Enter your email address " />
                            </div>
                            <div className="form_input">
                                <label htmlFor="password">Password</label>
                                <div className="two">
                                    <input type={!passShow ? "password" : "text"} onChange={setval} value={inpval.password} name="password" id="password" placeholder="Enter your password " />
                                    <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                        {!passShow ? "Show" : "Hide"}
                                    </div>
                                </div>
                            </div>
                            <div className="form_input">
                                <label htmlFor="password"> Confirm Password</label>
                                <div className="two">
                                    <input type={!cpassShow ? "password" : "text"} onChange={setval} value={inpval.cpassword} name="cpassword" id="cpassword" placeholder="Confirm your password " />
                                    <div className="showpass" onClick={() => setCPassShow(!cpassShow)}>
                                        {!cpassShow ? "Show" : "Hide"}
                                    </div>
                                </div>
                            </div>
                            <button className='btn' onClick={addUserdata}>Sign Up</button>
                            <p>Already have an Account? <NavLink to={"/"}> Log In </NavLink></p>
                        </form>
                    </div>
                </section>
            </>

        </div >
    )
}

export default Register
