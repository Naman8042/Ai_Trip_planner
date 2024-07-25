"use client";
import { useState } from "react";
import axios from "axios";

interface Signin {
  email: string;
  password: string;
}

const page = () => {
  const [data, setData] = useState<Signin>({
    email: "",
    password: "",
  });
  async function submitHandler(){
    await axios.post('/api/user/login',data)
    .then((res)=>console.log(res.data))
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-2  shadow-xl rounded-md p-10">
        <h1 className="text-3xl font-semibold text-center w-full mb-2">Login</h1>
        {/* <label>Enter Your Email</label> */}
        <input
          type="text"
          placeholder="Enter your Email"
          onChange={(e)=>(setData({...data,email:e.target.value}))}
          className="my-2  outline-none border-2 px-2 py-2 w-80 border-gray-400 rounded-md"
        />
        {/* <label>Enter Your Password</label> */}
        <input
          type="password"
          placeholder="Enter your Password"
          onChange={(e)=>(setData({...data,password:e.target.value}))}
          className="my-2  outline-none border-2 px-2 py-2 w-80 border-gray-400 rounded-md"
        />
        <button onClick={submitHandler} className="w-full mt-2 py-2 rounded-2xl bg-black font-semibold text-white">
          Login
        </button>
        <div className="flex items-center justify-center gap-1 mt-3">
          <span>Don't Have an Account? </span>
          <span className="font-semibold">Sign in</span>
        </div>
      </div>
    </div>
  );
};

export default page;
