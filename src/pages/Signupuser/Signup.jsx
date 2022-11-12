import React from "react";
import "./signup.css"
const Signup = () => {
  return (
    <>
      <div id="signupuser" className="container mt-5">
      <div>
        <div className="background ">
          <div className="shape" />
          <div className="shape" />
        </div>
        <form>
          <h3>Signup User</h3>
          <label htmlFor="username">Full Name</label>
          <input type="text" placeholder="Enter Your Name" id="username" />
          <label htmlFor="username">Phone Number</label>
          <input type="phone" placeholder="Enter your number" id="username" />
          <label htmlFor="username">Email</label>
          <input type="email" placeholder="Email" id="username" />
          <label htmlFor="username">Business Type</label>
          <input type="text" placeholder="Ex : Panshop,Hotel,NGO" id="username" />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" />
          
          <button>Log In</button>
          <div className="social">
            <div className="go">
              <i className="fab fa-google" /> Google
            </div>
            <div className="fb">
              <i className="fab fa-facebook" /> Facebook
            </div>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default Signup;
