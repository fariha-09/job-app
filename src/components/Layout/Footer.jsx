import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-gray-800">
      <div className="flex py-12 px-6">
        <div className="min-w-[200px] text-white px-10">
          <Link to="" className="text-2xl font-semibold hover:underline">
            JobFinder
          </Link>
          <p className="text-gray-300">Connecting talent with opportunity</p>
        </div>
        <div className='flex flex-col space-y-2  px-20 text-white min-w-[150px]"'>
          <h4 className="font-semibold text-lg mb-2">For Job Seekers</h4>
          <Link to="" className="hover:underline text-gray-300">
            Browse Jobs
          </Link>
          <Link to="" className="hover:underline text-gray-300">
            Career Resources
          </Link>
        </div>
        <div className="flex flex-col space-y-2 px-20 text-white min-w-[150px]">
          <h4 className="font-semibold text-lg mb-2">For Employers</h4>
          <Link to="" className="hover:underline text-gray-300">
            Post a Job
          </Link>
          <Link to="" className="hover:underline text-gray-300">
            Find Candidates
          </Link>
        </div>
        <div className="flex flex-col space-y-2 px-20 text-white  min-w-[150px] ">
          <h4 className="font-semibold text-lg mb-2">Company</h4>
          <Link to="" className="hover:underline text-gray-300">
            About Us
          </Link>
          <Link to="" className="hover:underline text-gray-300">
            Contact
          </Link>
          <Link to="" className="hover:underline text-gray-300">
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="border-t border-white/30 pt-4 pb-4 text-center text-gray-300 w-300 ml-10"></div>
      <p className="text-white">&copy; 2025 JobFinder. All rights reserved.</p>
    </div>
  );
}
