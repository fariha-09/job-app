import { useState } from 'react';
import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { LuBuilding2, LuFileText, LuGraduationCap } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { FiDollarSign } from "react-icons/fi";
import { Lightbulb } from 'lucide-react';

export default function Mainsection() {
  const [step, setStep] = useState(1);
  
  const [formData, setFormData] = useState({
    jobTitle: "",
    department: "",
    locationType: "",
    employmentType: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
   
  };

  const clickChange = () => {
    setStep(1);
  };

  return (
    <div>
      <div className='bg-blue-300/10 h-180 pt-4 '>
        <div className='bg-white h-15 mx-10 flex items-center justify-between px-6 '>

          <div className="flex items-center space-x-2">
            <FaArrowLeft className='text-gray-600 cursor-pointer' />
            <button onClick={() => setStep(step - 1)} className="text-gray-600"> Back</button>
            <h2 className="text-2xl font-bold pl-5">Post a Job</h2>
          </div>

          <div className='h-10 w-30 border rounded-xl border-gray-400 text-gray-900 font-medium flex flex-row p-2 ml-95'>
            <AiOutlineEye className='mt-1 mr-2 font-medium' />
            <p className=''>Preview</p>
          </div>
          <div className='h-10 w-30 border rounded-xl border-gray-400 text-gray-900 font-medium p-2'>
            <p>Save Draft</p>
          </div>
        </div>

        <div className='flex justify-center mt-7 mx-8 gap-6'>
          {/* Sidebar */}
          <div className='bg-white w-64 mt-7 leading-[2] rounded-2xl pb-5 text-left ml-9'>
            <h1 className='text-xl font-medium text-left p-4'>Progress</h1>
            <button className='flex items-center gap-2 mb-4 px-5'>
              <LuBuilding2 className="text-gray-700 font-medium" />
              <h1 className='text-gray-600 font-medium'>Basic Info</h1>
            </button>

            <button className='flex items-center gap-2 mb-4 px-5'>
              <LuFileText className="text-gray-700 font-medium" />
              <h1 className='text-gray-600 font-medium'>Job Details</h1>
            </button>

            <button className='flex items-center gap-2 mb-4 px-5'>
              <LuGraduationCap className="text-gray-700 font-medium" />
              <h1 className='text-gray-600 font-medium'>Requirements</h1>
            </button>

            <button className='flex items-center gap-2 mb-4 px-5'>
              <FiDollarSign className="text-gray-700 font-medium" />
              <h1 className='text-gray-600 font-medium'>Compensation</h1>
            </button>

            <button className='flex items-center gap-2 mb-4 px-5'>
              <IoSettingsOutline className="text-gray-700 font-medium" />
              <h1 className='text-gray-600 font-medium'>Application</h1>
            </button>

            <div className='border-b border-gray-300 mx-6'></div>

            <div className='bg-blue-100 m-4 rounded p-4'>
              <div className='flex flex-row '>
                <Lightbulb className='w-5 h-5 text-yellow-500 mt-2' />
                <h1 className='font-medium text-blue-900 text-left pl-2'>Tip</h1>
              </div>
              <p className="text-sm text-blue-700 text-left">Use clear, specific job titles that candidates would search for.</p>
            </div>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className='bg-white flex-1 p-5 rounded-2xl mt-7 mx-6 gap-6 text-left leading-[2]'>
            <h1 className="text-2xl font-bold pl-3 mb-2">Basic Information</h1>
            <p className="mb-2 text-gray-700 text-sm pl-3">Start with the essential details about this position</p>

            <label className="mb-2 text-gray-700 font-medium ">Job Title<span className="text-red-500 font-semibold">*</span></label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="e.g. Senior Software Engineer"
              className="p-2 mb-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex flex-col items-start relative w-full sm:w-1/2">
                <label className="mb-2 text-gray-700 font-medium ">Department</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="e.g, Engineer, Marketing"
                  className="p-2 mb-2 border border-gray-200 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col items-start relative w-full sm:w-1/2">
                <label className="mb-2 text-gray-700 font-medium">
                  Location Type <span className="text-red-500 font-semibold">*</span>
                </label>
                <select
                  name="locationType"
                  value={formData.locationType}
                  onChange={handleChange}
                  className="p-2 w-full border border-gray-300 bg-white/30 text-gray-700 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>Select location Type</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Peshawar">Peshawar</option>
                  <option value="Quetta">Quetta</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex flex-col items-start relative w-full sm:w-1/2">
                <label className="mb-2 text-gray-700 font-medium">
                  Employment Type <span className="text-red-500 font-semibold">*</span>
                </label>
                <select
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleChange}
                  className="p-2 w-full border border-gray-300 bg-white/30 text-gray-700 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>Select employment type</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Temporary">Temporary</option>
                  <option value="Internship">Internship</option>
                  <option value="Volunteer">Volunteer</option>
                </select>
              </div>

              <div className="flex flex-col items-start relative w-full sm:w-1/2">
                <label className="mb-2 text-gray-700 font-medium ">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="e.g, New York, NY"
                  className="p-2 mb-2 border border-gray-200 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex justify-between gap-4 mt-6 p-2 sm:pl-10">
              <button
                onClick={clickChange}
                type="button"
                className="border border-gray-400 text-gray-700 font-medium px-4 py-2 rounded-md text-sm hover:bg-gray-100 transition w-30 text-center"
              >
                Previous
              </button>
              <button
                type="submit"
                className="bg-[#7F4DFF] text-white px-6 py-2 rounded-md text-sm text-center hover:bg-[#693ce5] transition"
              >
                Next Step
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
