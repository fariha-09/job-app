import React from "react";
import Header from "../components/Layout/Header";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoAlertCircleOutline } from "react-icons/io5";
import Footer from "../components/Layout/Footer";

export default function ApplyJob() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const clickChange = () => {
    setStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("job-portal-production-1bac.up.railway.app/form/formsubmit", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ ...userData }),
      });
      const data = await res.json();
      console.log("The form data is", data);
      if (res.ok) {
        alert("Form data submitted successfully");
      }
    } catch (error) {
      alert("error occured here");
    }
  };

  const handleChange = (e) => {
    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Header />
      <section className="bg-blue-300/10 pb-20">
        <div className="flex flex-row items-start pt-7 pl-5">
          <Link to="" className="pr-2 text-gray-500 hover:text-gray-800 ">
            Home
          </Link>
          <span>{">"}</span>
          <Link to="" className="pr-2  text-gray-500 hover:text-gray-800">
            Jobs
          </Link>
          <span>{">"}</span>
          <Link to="" className="pr-2  text-gray-500 hover:text-gray-800">
            Senior Frontend Developer
          </Link>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white mx-auto w-[80%] p-6 mt-15 rounded-lg shadow-md border border-gray-200"
        >
          <h2 className="text-2xl font-bold mb-1">Senior Frontend Developer</h2>
          <div className="flex items-start md:items-center gap-4 relative">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
              alt="logo"
              className="w-14 h-14 object-contain rounded"
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <p className="text-gray-800 text-sm font-semibold">
                  TechCorp Solution
                </p>
                <MdOutlineStarOutline className="text-yellow-500 w-4 h-4" />
                <p className="text-sm text-gray-600 font-medium">4.8</p>
                <Link
                  to=""
                  className="border border-gray-400 text-white font-medium px-4 py-1 rounded-md ml-150"
                  style={{ backgroundColor: "#7F4DFF" }}
                >
                  Apply Now
                </Link>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-2 text-sm">
                <span className="border bg-gray-200 border-gray-400 text-gray-700 font-medium px-4 py-1 rounded-md">
                  New York, NY
                </span>
                <span className="border bg-gray-200 border text-gray-700 font-medium px-4 py-1 rounded-md">
                  Full-time
                </span>
                <span className="border bg-gray-200 border text-gray-700 font-medium px-4 py-1 rounded-md">
                  2 days ago
                </span>
                <span className="border bg-gray-200 border-gray-400 text-blue-700 font-medium px-4 py-1 rounded-md">
                  $90,000 - $120,000
                </span>
              </div>
            </div>
          </div>
          <div className="flex-grow h-px bg-gray-200 mt-10"></div>
          <h1 className="text-lg font-bold mb-1 mt-4">Application Form</h1>
          <div className="bg-gray-100 border border-gray-500 p-4 rounded-lg">
            <h1 class="text-lg font-semibold ">Personal Information</h1>
            <div className="flex gap-4 mb-4 justify-center">
              <div className="flex flex-col ">
                <label className="mb-2 text-gray-700 font-medium ">
                  Full Name<span className="text-red-500 font-semibold">*</span>
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={userData.fullName}
                  onChange={handleChange}
                  className="p-2 pl-4 mb-2 border border-gray-400  w-110 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col ml-10 ">
                <label className="mb-2 text-gray-700 font-medium ">
                  Email Address{" "}
                  <span className="text-red-500 font-semibold">*</span>
                </label>

                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  className=" pl-4 p-2  mb-2 border border-gray-400 w-110 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex gap-4 mb-4 justify-center">
              <div className="flex flex-col ">
                <label className="mb-2 text-gray-700 font-medium ">
                  Phone Number{" "}
                  <span className="text-red-500 font-semibold">*</span>
                </label>

                <input
                  type="text"
                  name="phoneNumber"
                  value={userData.phoneNumber}
                  onChange={handleChange}
                  className="p-2 pl-4 mb-2 border border-gray-400 w-110 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col ml-10 relative">
                <label className="mb-2 text-gray-700 font-medium ">
                  Resume/CV (Optional)
                </label>
                <MdOutlineFileUpload className="absolute left-14 top-11 text-gray-700" />
                <label
                  htmlFor="resume-upload"
                  className="cursor-pointer pl-4 p-2 mb-2 w-110 border-2 border-dotted border-gray-400 rounded-lg text-gray-500 text-sm text-center hover:bg-gray-50 transition"
                >
                  Upload Resume (PDF, DOC, DOCX)
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  id="resume-upload"
                  className="hidden"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-100 border border-gray-500 p-4 rounded-lg mt-7">
            <h1 class="text-lg font-semibold ">Additional Information</h1>
            <h1 class="text-lg text-gray-700 font-medium">Cover Letter</h1>
            <textarea
              rows="4"
              cols="80"
              className="mt-3 p-2 text-gray-700  mb-2 border  border-gray-400 rounded-lg  w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <div className="flex gap-4 mb-4 ml-10">
              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-medium ">
                  Linkedln Profile
                </label>
                <input
                  type="url"
                  className="p-2 pl-9 border border-gray-400 w-60 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col ml-10 ">
                <label className="mb-2 text-gray-700 font-medium ">
                  GitHub Profile
                </label>

                <input
                  type="url"
                  className="p-2 pl-9 border border-gray-400 w-60 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col  ml-10 ">
                <label className="mb-2 text-gray-700 font-medium ">
                  Portfolio Website
                </label>

                <input
                  type="url"
                  className="p-2 pl-9 border border-gray-400 w-60 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex gap-4 mb-4 justify-center">
              <div className="flex flex-col ">
                <label className="mb-2 text-gray-700 font-medium ">
                  Earliest Start Date
                </label>

                <input
                  type="text"
                  className="p-2 pl-4 mb-2 border border-gray-400  w-110 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col ml-10 ">
                <label className="mb-2 text-gray-700 font-medium ">
                  How did you hear about us?
                </label>

                <input
                  type="text"
                  className=" pl-4 p-2  mb-2 border border-gray-400 w-110 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex items-start gap-2 text-gray-700 font-medium pl-5">
              <input
                type="checkbox"
                id="remote"
                className="mt-1 accent-blue-600"
              />
              <label htmlFor="remote">
                I am willing to relocate if necessary
              </label>
            </div>
          </div>

          <div className="bg-blue-600/8 text-[#7F4DFF] border border-gray-500 p-4 rounded-lg mt-7 relative">
            <IoAlertCircleOutline className="absolute top-4 text-2xl left-7" />
            <p>
              By submitting this application, I certify that all information
              provided is accurate and complete to the best of my knowledge. I
              understand that any false statements or omissions may disqualify
              me from further consideration for employment.
            </p>
          </div>
          <div className="py-10 pl-155">
            <button
              onClick={clickChange}
              className="border border-gray-400 text-gray-700  w-40 font-medium px-4 py-3 rounded-md text-sm hover:bg-gray-100 transition w-30 text-center"
            >
              Back to Details
            </button>

            <button
              type="submit"
              style={{ backgroundColor: "#7F4DFF" }}
              className=" text-white px-4 py-2 rounded-md  hover:bg-blue-700 transition mb-5 ml-5"
            >
              Submit Application
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}
