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
      <div className="mt-8 mb-8 px-4 md:px-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
          <h1 className="text-2xl font-extrabold text-center md:text-left mb-4 md:mb-0">Available Jobs</h1>
          
          <div className="flex flex-col md:flex-row md:items-center gap-2 text-center">
            <button className="text-indigo-600 hover:underline">View All Jobs</button>
            <div className="flex gap-2 justify-center">
              <Link to="#" className="border border-gray-400 text-gray-700 font-medium px-4 py-2 rounded-md text-sm hover:bg-gray-100 transition text-center">
                Filters
              </Link>
              <Link to="#" className="border border-gray-400 text-gray-700 font-medium px-4 py-2 rounded-md text-sm hover:bg-gray-100 transition text-center">
                Most Recent
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {Array.isArray(filteredJobs) && filteredJobs.map((job) => (
            <div
              key={job.id || job.jobTitle}
              className="bg-white rounded-xl shadow-sm border p-4 md:p-5 flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full">
                <img
                  src={"https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"}
                  alt="logo"
                  className="w-14 h-14 object-contain rounded"
                />
                <div className="w-full">
                  <Link to={`/jobdetails/${job._id}`} className="text-lg font-semibold mb-1 block">{job.jobTitle}</Link>
                  <p className="text-gray-600 text-sm">{job.company || "Company Name"}</p>

                  <p className="text-sm text-gray-500 mt-2">
                    <strong>Responsibilities:</strong> {job.responsibilities?.join(", ")}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    <strong>Requirements:</strong> {job.requirements?.join(", ")}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    <strong>Benefits:</strong> {job.benefits?.join(", ")}
                  </p>

                  <div className="text-sm text-gray-500 mt-1 flex flex-wrap gap-1">
                    <span>{job.jobType || "Remote"} | </span>
                    <span>{job.jobDescription || "N/A"} | </span>
                    <span>{job.createdAt}</span>
                  </div>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {job.keySkills?.map((skill, i) => (
                      <span key={i} className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 mt-3">
                    <button className="flex items-center justify-center gap-1 border border-indigo-600 text-indigo-600 px-3 py-2 rounded hover:bg-indigo-50 text-sm w-full sm:w-auto">
                      <Heart className="w-4 h-4" /> Save Job
                    </button>
                    <Link to="/applyjob" className="flex items-center justify-center gap-1 bg-indigo-600 text-white px-3 py-2 rounded hover:bg-indigo-700 text-sm w-full sm:w-auto">
                      <Send className="w-4 h-4" /> Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
