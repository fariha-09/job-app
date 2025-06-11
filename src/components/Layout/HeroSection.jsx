import React, { useState } from "react";
import { Search, MapPin, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import Select from 'react-select'

export default function HeroSection() {
  const [experience,setExperience]=useState([])
  return (
    <section style={{ backgroundColor: "#9B4DFF" }} className="py-16">
      <div className=" pb-3   max-w-3xl mx-auto px-6">
        <div className="max-w-3xl px-6">
          <h2 className="text-white text-4xl font-bold mb-4">
            Discover Your Dream Job
          </h2>
          <p className="text-white text-lg">
            Find opportunities that match your skills and aspirations
          </p>
        </div>
      </div>
      <div className="bg-white/15 backdrop-blur-md shadow-lg rounded-lg p-6 mt-8 max-w-full mx-15">
        <div className="relative flex mb-4">
          <Search className="fa fa-user absolute left-3 top-3 text-white" />
          <input
            type="text"
            placeholder="Job title, keywords, or company"
            className="pl-10 bg-white/20 w-100 border border-gray-300 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 "
          />
          <MapPin className="fa fa-user absolute left-107 top-3 text-white" />
          <input
            type="text"
            placeholder="Location"
            className=" ml-5 bg-white/30 pl-10 w-60 text-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 "
          />
            <Briefcase className="fa fa-user absolute left-172 top-3 text-white" />
<select
                   className="w-40 ml-5 pl-10  border bg-white/30 border-gray-300 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 "
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                >
                  <option value="" disabled className="text-black">
                    Job Type
                  </option>
                  <option value="fresher" className="text-black">full-time</option>
                  <option value="1-year" className="text-black">part-time</option>
                  <option value="2-3-years" className="text-black">contract</option>
                  <option value="4-5-years"className="text-black">internship</option>
                  <option value="5plus" className="text-black">remote</option>
                </select>
          <input
            type="text"
            placeholder="Search Jobs"
            className=" ml-5 pl-10  border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2  text-blue-700"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center space-x-4 max-w-7xl mx-auto mt-6">
        <p className="text-white mr-4">Popular:</p>
        <Link
          to="/"
          className="bg-white/15 text-white px-4 py-2 rounded-full shadow-sm hover:bg-white/70"
        >
          Remote
        </Link>
        <Link
          to=""
          className="bg-white/15 text-white px-4 py-2 rounded-full shadow-sm hover:bg-white/70"
        >
          Developer
        </Link>
        <Link
          to=""
          className="bg-white/15 text-white px-4 py-2 rounded-full shadow-sm hover:bg-white/70"
        >
          Design
        </Link>
        <Link
          to=""
          className="bg-white/15 text-white px-4 py-2 rounded-full shadow-sm hover:bg-white/70"
        >
          Marketing
        </Link>
      </div>
    </section>
  );
}
