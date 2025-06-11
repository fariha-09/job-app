import React, { useState, useEffect } from "react";
import GetAllJobs from "./GetAllJobs";
import { Link } from "react-router-dom";
import { Heart, Send } from "lucide-react";

export default function JobsList() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await GetAllJobs();
      setJobs(result);
      setFilteredJobs(result);
      console.log("data is", result);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="mt-8 mb-8 ">
        <div className="flex">
          <h1 className="text-2xl font-extrabold pl-10 mb-6">Available Jobs</h1>
          <div className="text-center mt-6">
            <button className="text-indigo-600 hover:underline ml-160">
              View All Jobs
            </button>
          </div>

          <div>
            <div className="flex gap-2 justify-center mt-4 ">
              <Link
                to="#"
                className="ml-4 border border-gray-400 text-gray-700 font-medium px-4 py-2 rounded-md text-sm hover:bg-gray-100 transition w-30 text-center"
              >
                Filters
              </Link>
              <Link
                to="#"
                className="border border-gray-400 text-gray-700 font-medium px-4 py-2 rounded-md text-sm hover:bg-gray-100 transition w-30 text-center"
              >
                Most Recent
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 px-10">
          {Array.isArray(filteredJobs) && filteredJobs.map((job) => (
            <div
              key={job.id || job.jobTitle}
              className="bg-white rounded-xl shadow-sm border p-5 flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div className="flex items-start md:items-center gap-4">
                <img
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
                  }
                  alt="logo"
                  className="w-14 h-14 object-contain rounded"
                />
                <div>
                 <Link to={`/jobdetails/${job._id}`}className="text-lg font-semibold mb-1">{job.jobTitle}</Link>
                  <p className="text-gray-600 text-sm">
                    {job.company || "Company Name"}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    <strong>Responsibilities:</strong>
                    {job.responsibilities?.join(", ")}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    <strong>Requirements:</strong>
                    {job.requirements?.join(", ")}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    <strong>Benefits:</strong> {job.benefits?.join(", ")}
                  </p>

                  <div className="text-sm text-gray-500 mt-1">
                    <span>{job.jobType || "Remote"} | </span>
                    <span>{job.jobDescription || "N/A"} | </span>
                    <span>{job.createdAt}</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {job.keySkills?.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-2">
                    <button className="flex items-center gap-1 border border-indigo-600 text-indigo-600 px-3 py-1 rounded hover:bg-indigo-50 text-sm">
                      <Heart className="w-4 h-4" /> Save Job
                    </button>
                    <Link to="/applyjob" className="flex items-center gap-1 bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 text-sm">
                      <Send className="w-4 h-4" /> Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="px-10 mt-8">
          {jobs.map((job, index) => (
            <div key={job.id || index} className="mb-4">
              <h2>
                <b>Job Title:</b> {job.title}
              </h2>
              <p>
                <b>Job description:</b> {job.descriptionBreakdown?.employmentType || "N/A"}
              </p>
            </div>
          ))} 
        </div> */}
      </div>
    </>
  );
}
