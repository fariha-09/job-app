import React, { useState, useEffect } from "react";
import Header from "../components/Layout/Header";
import { Link, useParams } from "react-router-dom";
import { MdOutlineStarOutline } from "react-icons/md";
import Footer from "../components/Layout/Footer";

export default function JobDetails() {
  const [job, setJob] = useState();
  const { _id } = useParams();

  useEffect(() => {
    const fetchJob = async () => {
      fetch( `https://job-portal-production-1bac.up.railway.app/jobs/${_id}`)
      .then(res=> res.json())
      .then(data => {
         console.log("single data is ",data)
        console.log("Data:", data.data);
        setJob(data)
      })
      // const jobs = await GetAllJobs();
      // const selectedJob = jobs.find((ele) => ele._id == _id);
      // setJob(selectedJob);
    };
    fetchJob();
  }, [_id]);
  if (!job) return <p className="p-10">Loading...</p>;
  return (
    <>
      <Header/>
      <section className="bg-blue-300/10 pb-20 px-4 sm:px-6 lg:px-10">
  <div className="flex flex-wrap items-start pt-7 pl-5 text-sm sm:text-base">
          <Link to="/" className="pr-2 text-gray-500 hover:text-gray-800 ">
            Home
          </Link>
          <span>{">"}</span>
          <Link
            to="/jobslist"
            className="pr-2  text-gray-500 hover:text-gray-800"
          >
            Jobs
          </Link>
          <span>{">"}</span>
          <h2 className="pr-2  text-gray-800 hover:text-gray-800">
            {job.jobTitle}
          </h2>
        </div>

      <div className="bg-white mx-auto w-full md:w-[80%] p-4 sm:p-6 mt-10 rounded-lg shadow-md border border-gray-200">
    <h2 className="text-2xl font-bold mb-1">{job.jobTitle}</h2>
    
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 relative">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
        alt="logo"
        className="w-14 h-14 object-contain rounded"
      />
      
      <div className="w-full">
        <div className="flex flex-wrap items-start md:items-center gap-2 mb-2">
          <p className="text-gray-800 text-sm font-semibold">{job.company}</p>
          <MdOutlineStarOutline className="text-yellow-500 w-4 h-4" />
          <p className="text-sm text-gray-600 font-medium">4.8</p>
          
          <Link
            to="/applyjob"
            className="border border-gray-400 text-white font-medium px-4 py-1 rounded-md ml-0 md:ml-150 mt-2 md:mt-0"
            style={{ backgroundColor: "#7F4DFF" }}
          >
            Apply Now
          </Link>
        </div>

        <div className="flex flex-wrap gap-2 mt-2 text-sm">
          <span className="border bg-gray-200 border-gray-400 text-gray-700 font-medium px-4 py-1 rounded-md">
            {job.location}
          </span>
          <span className="border bg-gray-200 border-gray-400 text-gray-700 font-medium px-4 py-1 rounded-md">
            {job.jobType}
          </span>
          <span className="border bg-gray-200 border-gray-400 text-gray-700 font-medium px-4 py-1 rounded-md">
            2 days ago
          </span>
          <span className="border bg-gray-200 border-gray-400 text-blue-700 font-medium px-4 py-1 rounded-md">
            {job.minSalary}-{job.maxSalary}
          </span>
        </div>
      </div>
    </div>

    <div className="flex-grow h-px bg-gray-200 mt-10"></div>
          <h1 className="text-lg font-bold mb-1 mt-4">Job Description</h1>
          <p className="text-gray-600">{job.jobDescription}</p>
          <h1 className="text-lg font-bold mb-1 mt-4">Key Skills</h1>
          <div className="flex flex-wrap gap-2 mt-2 text-sm">
            {job.keySkills && job.keySkills?.map((skill) => (
              <span
                key={skill}
                className="border bg-gray-200 border-gray-400 text-blue-700 font-medium px-4 py-1 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>

          <h1 className="text-lg font-bold mb-1 mt-4">Responsibilities</h1>
          <ul className="text-left list-disc marker:text-blue-500 pl-5 text-left space-y-2">
            {job.responsibilities && job.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h1 className="text-lg font-bold mb-1 mt-4">Requirements</h1>
          <ul className="text-left list-disc marker:text-blue-500 pl-5 text-left space-y-2">
            {job.requirements && job.requirements.map((ele, index) => (
              <li key={ele}>{ele}</li>
            ))}
          </ul>
          <h1 className="text-lg font-bold mb-1 mt-4">Benefits</h1>
          <ul className="text-left list-disc marker:text-blue-500 pl-5 text-left space-y-2">
            {job.benefits && job.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
          <button
            style={{ backgroundColor: "#7F4DFF" }}
            className=" text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition mb-5"
          >
            Apply for this Position
          </button>
        </div>
        <h1 className="text-lg font-bold my-4 text-center">Similar Jobs You Might Like</h1>

  <div className="flex flex-col lg:flex-row gap-6 w-full md:w-[80%] justify-center mx-auto">
    {/* Card 1 */}
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 w-full lg:w-1/2 border border-gray-200">
            <div className="flex items-start md:items-center gap-4 relative">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
                alt="logo"
                className="w-14 h-14 object-contain rounded"
              />
              <div>
                <div className="flex flex-col items-center gap-2 mb-1">
                  <p className="text-gray-800 text-sm font-bold">
                    React Developer
                  </p>
                  <p className="text-gray-600 ">WebDey Solutions</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-2 text-sm">
                  <span className="border bg-gray-200 border-gray-400 text-gray-700 font-medium px-4 py-1 rounded-md">
                    Full-time
                  </span>
                  <span className="border bg-gray-200 border-gray-400 text-gray-700 font-medium px-4 py-1 rounded-md">
                    Remote
                  </span>
                </div>
              </div>
            </div>
            <Link
              to=""
              className="text-blue-700 hover:underline mt-4 inline-block "
            >
              View Details
            </Link>
          </div>
          {/* card 2 */}
         <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 w-full lg:w-1/2 border border-gray-200">
            <div className="flex items-start md:items-center gap-4 relative">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
                alt="logo"
                className="w-14 h-14 object-contain rounded"
              />
              <div className="">
                <div className="flex flex-col items-center gap-2 mb-1">
                  <p className="text-gray-800 text-sm font-bold">
                    Frontend Engineer
                  </p>
                  <p className="text-gray-600 ">DigitalCraft Inc</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-2 text-sm">
                  <span className="border bg-gray-200 border-gray-400 text-gray-700 font-medium px-4 py-1 rounded-md">
                    Full-time
                  </span>
                  <span className="border bg-gray-200 border-gray-400 text-gray-700 font-medium px-4 py-1 rounded-md">
                    San Francisco, CA
                  </span>
                </div>
                <Link
                  to=""
                  className="text-blue-700 hover:underline m-3  mt-4 inline-block"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
