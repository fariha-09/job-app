import React from "react";
import { CircleUser } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className=" max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
         <Link to="/"><CircleUser style={{ color: "#7F4DFF" }} className="w-6 h-6 " /></Link>
          <Link to="/" style={{ color: "#7F4DFF" }} className="font-bold text-xl ml-2">
            ProHire
          </Link>
        </div>
        <nav className="space-x-6 text-gray-700 font-medium hidden sm:flex">
          <Link to="/jobslist" className="hover:text-blue-600 transition">
            Jobs
          </Link>
          <Link to="/registercompany" className="hover:text-blue-600 transition">
            Companies
          </Link>
          <Link to="" className="hover:text-blue-600 transition">
            For Employers
          </Link>
          <Link to="/loginpage" className="hover:text-blue-600 transition">
            Login
          </Link>
          <Link
            to="/signuppage"
            style={{ backgroundColor: "#7F4DFF" }}
            className=" text-white px-4 py-2 rounded-4xl hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}
