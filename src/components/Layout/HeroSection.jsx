import React, { useState } from "react";
import { Search, MapPin, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [experience, setExperience] = useState("");

  return (
    <section style={{ backgroundColor: "#9B4DFF" }} className="py-16">
      {/* Header Section */}
      <div className="pb-3 max-w-3xl mx-auto px-6">
        <div className="max-w-3xl px-6 text-center just sm:text-left ">
          <h2 className="text-white text-4xl font-bold mb-4 flex justify-center">
            Discover Your Dream Job
          </h2>
          <p className="text-white text-lg flex justify-center">
            Find opportunities that match your skills and aspirations
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-white/15 backdrop-blur-md shadow-lg rounded-lg p-6 mt-8 max-w-7xl mx-auto flex justify-center">
        <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
          {/* Job Title Input */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-3 text-white" />
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              className="pl-10 bg-white/20 w-full border border-gray-300 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2"
            />
          </div>

          {/* Location Input */}
          <div className="relative w-full sm:w-60">
            <MapPin className="absolute left-3 top-3 text-white" />
            <input
              type="text"
              placeholder="Location"
              className="pl-10 bg-white/30 w-full border border-gray-300 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2"
            />
          </div>

          {/* Job Type Dropdown */}
          <div className="relative w-full sm:w-40">
            <Briefcase className="absolute left-3 top-3 text-white" />
            <select
              className="w-full pl-10 bg-white/30 border border-gray-300 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            >
              <option value="" disabled className="text-black">
                Job Type
              </option>
              <option value="full-time" className="text-black">
                Full-time
              </option>
              <option value="part-time" className="text-black">
                Part-time
              </option>
              <option value="contract" className="text-black">
                Contract
              </option>
              <option value="internship" className="text-black">
                Internship
              </option>
              <option value="remote" className="text-black">
                Remote
              </option>
            </select>
          </div>

          {/* Search Button */}
          <div className="w-full sm:w-auto">
            <input
              type="submit"
              value="Search Jobs"
              className="bg-white text-blue-700 cursor-pointer border border-gray-300 rounded-md py-2 px-4 w-full hover:bg-gray-100 transition"
            />
          </div>
        </div>
      </div>

      {/* Popular Tags */}
      <div className="flex flex-wrap justify-center items-center space-x-2 max-w-7xl mx-auto mt-6">
        <p className="text-white mr-4">Popular:</p>
        <Link
          to="/"
          className="bg-white/15 text-white px-4 py-2 mb-2 rounded-full shadow-sm hover:bg-white/70"
        >
          Remote
        </Link>
        <Link
          to=""
          className="bg-white/15 text-white px-4 py-2 mb-2 rounded-full shadow-sm hover:bg-white/70"
        >
          Developer
        </Link>
        <Link
          to=""
          className="bg-white/15 text-white px-4 py-2 mb-2 rounded-full shadow-sm hover:bg-white/70"
        >
          Design
        </Link>
        <Link
          to=""
          className="bg-white/15 text-white px-4 py-2 mb-2 rounded-full shadow-sm hover:bg-white/70"
        >
          Marketing
        </Link>
      </div>
    </section>
  );
}
