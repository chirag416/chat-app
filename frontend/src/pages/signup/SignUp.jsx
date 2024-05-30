import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(inputs)
    await signup(inputs)
  }

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs,gender})
  }


  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center">
          {" "}
          SignUp <span className="text-blue-400">ChatBook</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label pt-6">
              <span className="text-base label-text"> Full Name</span>
            </label>
            <input
            onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
            value={inputs.fullName}
            type="text"
            placeholder="Enter your full name"
            className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text"> Username</span>
            </label>
            <input
            onChange={(e) => setInputs({...inputs, username: e.target.value})}
            value={inputs.username}
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
            onChange={(e) => setInputs({...inputs, password: e.target.value})}
            value={inputs.password}
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
            value={inputs.confirmPassword}
              type="password"
              placeholder="Confirm password"
              className="w-full input input-bordered h-10"
            />
          </div>

          {/* Gender checkbox here */}
          <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender = {inputs.gender} />

          <Link to={"/login"} className="text-sm hover:underline hover:text-blue-500 mt-4 inline-block"> Already have an account </Link  >     <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-500" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default SignUp;
