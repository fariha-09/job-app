import React from 'react';
import Header from './Header';
import { LuBuilding2 } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from 'react';
import { MdOutlinePerson } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function RegisterCompany() {
     const [experience, setExperience] = useState("");
  return (
    <>
    <Header/>
    <section className="bg-blue-300/10  flex justify-center items-center">
    <div className="w-[90%] max-w-6xl flex flex-col items-center text-center">
    <div className="w-1/2 flex flex-col items-center p-6 text-center">
        <h2 className="text-xl font-extrabold mb-1">Register Your Company</h2>
          <p className="text-gray-600 mb-1">
           Start hiring top talent today
          </p>
    </div>
        <div className="bg-white w-1/2 p-6 rounded-lg shadow-md border border-gray-200 flex flex-col mb-5 ">
        <div className="relative flex space-x-3 ">
            <LuBuilding2 className="text-blue-700 text-2xl"/>
         <p className="text-gray-600 font-bold mb-0">
               Company Information
          </p>
        </div>
<div className="flex flex-col items-start relative pt-5">
                    <label className=" mb-2 text-gray-700 font-medium mb-2">Company Name <span className="text-red-500 font-semibold">*</span></label>
                    <input
                      type="text"
                      placeholder="Enter your company name"
                      className="p-2 pl-9 mb-2 border  border-gray-200 rounded-lg  w-135 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>
                     <div className="flex flex-col items-start  relative">
                    <label className=" text-gray-700 font-medium mb-2 ">Company Email  <span className="text-red-500 font-semibold">*</span>
                    </label>
                    <HiOutlineMail className="absolute left-3 top-11 text-gray-700" />
                    <input
                      type="text"
                      placeholder="company@example.com
"
                      className="p-2 pl-9 mb-2 border  border-gray-200 rounded-lg  w-135 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>
            <div className="flex gap-4 mb-4">
              <div className="flex flex-col items-start">
                <label className="mb-2 text-gray-700 font-medium ">
                  Industry <span className="text-red-500 font-semibold">*</span>
                </label>
                <select
                  className="p-2 w-65 border mb-2 bg-white/30 border-gray-300 text-gray-700 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                >
                  <option value="" disabled>
                    Select industry

                  </option>
                  <option value="fresher">Technology</option>
                  <option value="1-year">Finance</option>
                  <option value="2-3-years">Healthcare</option>
                  <option value="4-5-years">Education</option>
                  <option value="5plus">Manufacturing</option>
                  <option value="industry">Retail</option>
                  <option value="industry">Construction</option>
                  <option value="industry">Transportation</option>
                  <option value="industry">Hospitality</option>
                  <option value="industry">Real Estate</option>
                  <option value="industry">Marketing & Advertising</option>
                  <option value="industry">Legal Services</option>
                   <option value="telecommunications">Telecommunications</option>
  <option value="non_profit">Non-Profit</option>
  <option value="agriculture">Agriculture</option>
  <option value="government">Government</option>
  <option value="energy">Energy & Utilities</option>
  <option value="media">Media & Entertainment</option>
  <option value="consulting">Consulting</option>
  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex flex-col items-start ">
                <label className="mb-2 text-gray-700 font-medium ">
              Company Size <span className="text-red-500 font-semibold">*</span>
                </label>
                <select
                  className="p-2 w-65  border mb-2 bg-white/30 border-gray-300 text-gray-700 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                >
                  <option value="" disabled>
                    Select size
                  </option>
  <option value="1-10">1–10 employees</option>
  <option value="11-50">11–50 employees</option>
  <option value="51-200">51–200 employees</option>
  <option value="201-500">201–500 employees</option>
  <option value="501-1000">501–1000 employees</option>
  <option value="1001-5000">1001–5000 employees</option>
  <option value="5001-10000">5001–10,000 employees</option>
  <option value="10000+">10,000+ employees</option>
                </select>
              </div>
            </div>
<div className="flex flex-col items-start">
            <label className=" mb-2 text-gray-700 font-medium mb-2">
              Website (Optional)
            </label>
            <input
              type="text"
              placeholder="https://yourcompany.com"
              className="p-2 pl-4 mb-2 border border-gray-200 rounded-lg  w-135 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

<div className="relative flex space-x-3 ">
            <MdOutlinePerson className="text-blue-700 text-2xl"/>
         <p className="text-gray-600 font-bold mb-0">
       Contact Person
          </p>
        </div>
        <div className="flex gap-4 mb-4">
                    <div className="flex flex-col items-start relative">
                      <label className="mb-2 text-gray-700 font-medium ">Full Name  <span className="text-red-500 font-semibold">*</span></label>
                
                      <input
                        type="text"
                        placeholder="Your full name"
                        className="p-2 pl-9 mb-2 border border-gray-200 w-65 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <label className="mb-2 text-gray-700 font-medium ">Job Title  <span className="text-red-500 font-semibold">*</span></label>
                      <input
                        type="text"
                        placeholder="HR Manager, CEO, etc."
                        className="p-2  mb-2 border border-gray-200 w-65 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start  relative">
                            <label className="mb-2 text-gray-700 font-medium mb-2 ">Phone Number <span className="text-red-500 font-semibold">*</span></label>
                            <LuPhone className="absolute left-3 top-11 text-gray-700" />
                            <input
                              type="text"
                              placeholder="+1 (555) 123-4567"
                              className="p-2 pl-9 mb-2 border  border-gray-200 rounded-lg  w-135 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            </div>
                            <div className="relative flex space-x-3 ">
            <IoLockClosedOutline className="text-blue-700 text-2xl"/>
         <p className="text-gray-600 font-bold mb-0">
     Account Setup
          </p>
        </div>
 <div className="flex gap-4 mb-4 ">
            <div className="flex flex-col items-start relative">
              <label className="mb-2 text-gray-700 font-medium ">Password  <span className="text-red-500 font-semibold">*</span></label>
              <input
                type="password"
                placeholder=""
                className="p-2 pl-3 border border-gray-200 w-60 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col items-start relative">
              <label className="mb-2 text-gray-700 font-medium  ">Confirm Password  <span className="text-red-500 font-semibold">*</span></label>
              <input
                type="password"
                placeholder=""
                className="p-2 pl-3 border border-gray-200 w-60 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
            <label className="mb-2 text-gray-700 font-semibold flex flex-start pt-2">
         Additional Information (Optional)
            </label>
<div className="flex flex-col items-start relative">
            <label className="mb-2 text-gray-700 font-medium mb-2 ">
              Resume/CV (Optional)
            </label>
            <MdOutlineFileUpload className="absolute left-37 top-13 text-gray-700" />
            <label
              htmlFor="resume-upload"
              className="cursor-pointer p-4 mb-2 w-full border-2 border-dotted border-gray-700 rounded-lg text-gray-500 text-sm text-center hover:bg-gray-50 transition"
            >
              Upload Logo (PNG, JPG, SVG)
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              id="resume-upload"
              className="hidden"
            />
          </div>
<div className="flex flex-col items-start ">
            <label className="mb-2 text-gray-700 font-medium">
          Company Description
            </label>
            <textarea
              rows="4"
              cols="50"
              placeholder="Brief description of your company and what you do..."
              className="p-2 text-gray-700  mb-2 border  border-gray-200 rounded-lg  w-135 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          
          <div className="mt-4 space-y-4 text-sm text-gray-700 bg-blue-300/25 border border-gray-300 h-30 w-135 rounded-lg p-2 pt-6 px-8 ">
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-1 accent-blue-600"
              />
              <label htmlFor="terms">
                I agree to the{" "}
                <a
                  href="/terms"
                  className="text-blue-600 font-semibold underline"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="text-blue-600 font-semibold font-underline"
                >
                  Privacy Policy
                </a>{" "}
                <span className="text-red-500 font-semibold">*</span>
              </label>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="alerts"
                className="mt-1 accent-blue-600"
              />
              <label htmlFor="alerts">
               Send me hiring tips and platform updates via email
              </label>
            </div>
          </div>
<Link to=""  className="bg-[#7F4DFF] w-135 text-white text-center  py-2 rounded-xl mb-5 block my-5">Register Company</Link>
<div className="flex flex-row justify-center p-4">
            <p className=" text-gray-700 font-medium ">
              Already have an account?
            </p>
            <Link to="/signuppage" style={{ color: "#7F4DFF", fontWeight: 600 }} >
        
              Sign up
            </Link>
          </div>
          </div>
          

          </div>
          </section>
          <Footer/>
    </>
   
  );
}
