import React, { useState } from 'react';
import Header from './Header';
import { HiOutlineMail } from "react-icons/hi";
import { IoLockClosedOutline } from "react-icons/io5";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { useNavigate, Link } from 'react-router-dom';

export default function Signin() {
    const [showPassword, setShowPassword] = useState(false);
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setCredentials({ ...credentials, email: e.target.value });
    }

    const handlePasswordChange = (e) => {
        setCredentials({ ...credentials, password: e.target.value });
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("job-portal-production-1bac.up.railway.app/api/login", {
                method: 'POST',
                credentials: "include",
                headers: { 'Content-type': 'application/json; charset=UTF-8' },
                body: JSON.stringify(credentials),
            });
            const data = await res.json();
            if (res.ok) {
                alert(data.message);
                navigate("/");
            } else {
                alert(data.message || "Login failed");
            }
            console.log("signin data:", data);
        } catch (error) {
            console.log("login error", error);
        }
        console.log("user is", credentials);
    }

    return (
        <>
            <Header />
            <section className="bg-blue-300/10 min-h-screen flex items-center justify-center px-4">
                <form onSubmit={handleLogin} autoComplete="off" className="bg-white w-full max-w-md md:w-1/2 p-6 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-xl font-bold mb-1">Welcome Back!</h2>
                    <p className="text-gray-600 mb-6">Sign in to continue your job search</p>

                    {/* Email Input */}
                    <div className="flex flex-col mb-4 relative">
                        <label className="text-gray-700 font-medium mb-2">Email Address</label>
                        <HiOutlineMail className="absolute left-3 top-11 text-gray-700" />
                        <input
                            type="email"
                            autoComplete="off"
                            value={credentials.email}
                            onChange={handleEmailChange}
                            placeholder="Enter your email"
                            className="p-2 pl-9 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="flex flex-col mb-4 relative">
                        <label className="text-gray-700 font-medium mb-2">Password</label>
                        <IoLockClosedOutline className="absolute left-3 top-11 text-gray-700" />
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                autoComplete="new-password"
                                value={credentials.password}
                                onChange={handlePasswordChange}
                                placeholder="Enter your password"
                                className="p-2 pl-9 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
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

                    {/* Remember Me and Forgot Password */}
                    <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center">
                            <input type="checkbox" id="remember" className="accent-blue-600" />
                            <label htmlFor="remember" className="text-gray-700 ml-2">Remember me</label>
                        </div>
                        <Link to="" className="text-[#7F4DFF] font-semibold text-sm">Forgot password?</Link>
                    </div>

                    {/* Sign In Button */}
                    <button type="submit" className="bg-[#7F4DFF] w-full text-white py-2 rounded-xl mb-5">Sign In</button>

                    {/* Divider */}
                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex-grow h-px bg-gray-300"></div>
                        <p className="text-gray-500 text-sm">Or continue with</p>
                        <div className="flex-grow h-px bg-gray-300"></div>
                    </div>

                    {/* Social Buttons */}
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="relative flex justify-center items-center p-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <FaGoogle className="absolute left-4 top-1/2 transform -translate-y-1/2" />
                            <Link to="">Google</Link>
                        </div>
                        <div className="relative flex justify-center items-center p-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <FiLinkedin className="absolute left-4 top-1/2 transform -translate-y-1/2" />
                            <Link to="">LinkedIn</Link>
                        </div>
                    </div>

                    {/* Sign Up Link */}
                    <div className="flex justify-center">
                        <p className="text-gray-700 font-medium">Don't have an account? </p>
                        <Link to="/signuppage" className="text-[#7F4DFF] font-semibold ml-2">Sign up</Link>
                    </div>
                </form>
            </section>
        </>
    );
}
