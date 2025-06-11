import React from 'react';
import Header from './Header';
import { HiOutlineMail } from "react-icons/hi";
import { IoLockClosedOutline } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { useState,useEffect} from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


export default function Signin() {
    const [showPassword, setShowPassword] = useState(false);

  const [credentials,setCredentials]=useState({ email: '', password: '' });
 const navigate = useNavigate();

 const  handleEmailChange=(e)=>{
setCredentials({...credentials,email:e.target.value})
 }
      
const  handlePasswordChange=(e)=>{
setCredentials({...credentials,password:e.target.value})
 }

 const handleLogin=async(e)=>{
     e.preventDefault(); 
  try {
   const res=await fetch("http://localhost:3001/api/login",{
     method:'POST',
     credentials: "include",
    headers: {
         'Content-type': 'application/json; charset=UTF-8',
        },
          body: JSON.stringify(credentials),
      })
    const data=await res.json();

    if (res.ok) {
      alert(data.message); // ✅ Alert on frontend
      navigate("/");
    } else {
      alert(data.message || "Login failed");
    }
    console.log("signin data:",data);
  } catch (error) {
    console.log("login error",error)
  }
  console.log("user is",credentials)
 }
  return (
    <>
      <Header/>
<section className="bg-blue-300/10 h-180 flex justify-center">
        <form onSubmit={handleLogin}   autoComplete="off" className="bg-white  w-[50%] h-140 p-6 mt-15 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-bold mb-1">Welcome Back!</h2>
          <p className="text-gray-600 mb-6">
            Sign in to continue your job search
          </p>
 <div className="flex flex-col items-start ml-10 relative">
          <label className=" mb-2 text-gray-700 font-medium mb-2">Email Address</label>
          <HiOutlineMail className="absolute left-3 top-11 text-gray-700" />
          <input
            type="email"
            name="nope-email"
    autoComplete="off"
            value={credentials.email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className="p-2 pl-9 mb-2 border  border-gray-200 rounded-lg  w-135 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          </div>
           <div className="flex flex-col items-start ml-10 relative">
          <label className=" mb-2 text-gray-700 font-medium mb-2">Password</label>
          <IoLockClosedOutline className="absolute left-3 top-11 text-gray-700" />
           <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
           name="nope-password"
    autoComplete="new-password"
            value={credentials.password}
             onChange={handlePasswordChange}
            placeholder="Enter your password"
            className="p-2 pl-9 mb-2 border  border-gray-200 rounded-lg  w-135 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>


          </div>
  <div className="flex items-start gap-2 pl-10">
              <input
                type="checkbox"
                id="remote"
                className="mt-1 accent-blue-600"
              />
              <label htmlFor="remote" className='text-gray-700 '>Remember me</label>
              <Link to="" className='pl-70' style={{ color: "#7F4DFF", fontWeight: 600 }}>Forgot password?</Link>
            </div>
             <button type="submit" className="bg-[#7F4DFF] w-135 ml-10 text-white text-center  py-2 rounded-xl mb-5 block my-5">Sign In</button>
<div className="flex items-center gap-4">
  <div className="flex-grow h-px bg-gray-300"></div>
  <p className="text-gray-500 text-sm">Or continue with</p>
  <div className="flex-grow h-px bg-gray-300"></div>
</div>
<div className="flex gap-4 my-4 ml-10">
<div className="relative flex justify-center items-center py-2 pl-10 pr-4 rounded mb-4 p-2 border border-gray-200 w-60 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <FaGoogle className="absolute left-20 top-1/2 transform -translate-y-1/2 "/>
          <Link to="">Google</Link>
          </div>
          <div className="relative flex justify-center items-center py-2 pl-10 pr-4 rounded mb-4 p-2 border border-gray-200 w-60 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <FiLinkedin className="absolute left-20 top-1/2 transform -translate-y-1/2 "/>
          <Link to="">inkedIn</Link>
          </div>
          </div>
          <div className="flex flex-row justify-center">
<p className=" text-gray-700 font-medium">Don't have an account? </p>
          <Link to="/signuppage" style={{ color: "#7F4DFF", fontWeight: 600}}> Sign up</Link>
          </div>
          </form>
          </section>
    </>
    
  );
}
