import React, { useState } from "react";
import Header from "./Header";
import { LuBuilding2, LuPhone } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePerson, MdOutlineFileUpload } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function RegisterCompany() {
  const [industry, setIndustry] = useState("");
  const [companySize, setCompanySize] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    jobTitle: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch(
        "https://job-portal-production-1bac.up.railway.app/api/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            role: "company",
            industry: industry,
          }),
        }
      );

      const data = await res.json();
      if (res.ok) {
        alert(data.message);
        navigate("/loginpage");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      alert("Network error: " + error.message);
    }
  };

  return (
    <>
      <Header />
      <section className="bg-blue-300/10 flex justify-center items-center py-10">
        <form
          onSubmit={handleSubmit}
          className="w-[90%] max-w-6xl flex flex-col items-center text-center"
        >
          <div className="w-full max-w-lg flex flex-col items-center p-6 text-center">
            <h2 className="text-xl font-extrabold mb-1">
              Register Your Company
            </h2>
            <p className="text-gray-600 mb-1">Start hiring top talent today</p>
          </div>

          <div className="bg-white w-full max-w-2xl p-6 rounded-lg shadow-md border border-gray-200 flex flex-col mb-5">
            {/* Company Information */}
            <div className="relative flex space-x-3 mb-5">
              <LuBuilding2 className="text-blue-700 text-2xl" />
              <p className="text-gray-600 font-bold mb-0">
                Company Information
              </p>
            </div>

            <div className="flex flex-col items-start relative mb-4">
              <label className="mb-2 text-gray-700 font-medium">
                Company Name{" "}
                <span className="text-red-500 font-semibold">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                onChange={handleChange}
                value={formData.fullName}
                placeholder="Enter your company name"
                className="p-2 pl-4 mb-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col items-start relative mb-4">
              <label className="mb-2 text-gray-700 font-medium">
                Company Email{" "}
                <span className="text-red-500 font-semibold">*</span>
              </label>
              <HiOutlineMail className="absolute left-3 top-11 text-gray-700" />
              <input
                type="text"
                placeholder="company@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 pl-9 mb-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Industry & Size */}
            <div className="flex flex-col lg:flex-row gap-4 mb-4 w-full">
              <div className="flex flex-col items-start w-full">
                <label className="mb-2 text-gray-700 font-medium">
                  Industry <span className="text-red-500 font-semibold">*</span>
                </label>
                <select
                  className="p-2 border bg-white border-gray-300 text-gray-700 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                >
                  <option value="" disabled>
                    Select industry
                  </option>
                  <option value="Technology">Technology</option>
                  <option value="Finance">Finance</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Retail">Retail</option>
                  <option value="Construction">Construction</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Hospitality">Hospitality</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Marketing & Advertising">
                    Marketing & Advertising
                  </option>
                  <option value="Legal Services">Legal Services</option>
                  <option value="Telecommunications">Telecommunications</option>
                  <option value="Non-Profit">Non-Profit</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Government">Government</option>
                  <option value="Energy & Utilities">Energy & Utilities</option>
                  <option value="Media & Entertainment">
                    Media & Entertainment
                  </option>
                  <option value="Consulting">Consulting</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col items-start w-full">
                <label className="mb-2 text-gray-700 font-medium">
                  Company Size{" "}
                  <span className="text-red-500 font-semibold">*</span>
                </label>
                <select
                  className="p-2 border bg-white border-gray-300 text-gray-700 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  value={companySize}
                  onChange={(e) => setCompanySize(e.target.value)}
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

            <div className="flex flex-col items-start mb-4">
              <label className="mb-2 text-gray-700 font-medium">
                Website (Optional)
              </label>
              <input
                type="text"
                placeholder="https://yourcompany.com"
                className="p-2 pl-4 mb-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Contact Person */}
            <div className="relative flex space-x-3 mb-5">
              <MdOutlinePerson className="text-blue-700 text-2xl" />
              <p className="text-gray-600 font-bold mb-0">Contact Person</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 mb-4 w-full">
              <div className="flex flex-col items-start w-full">
                <label className="mb-2 text-gray-700 font-medium">
                  Full Name{" "}
                  <span className="text-red-500 font-semibold">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="p-2 mb-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col items-start w-full">
                <label className="mb-2 text-gray-700 font-medium">
                  Job Title{" "}
                  <span className="text-red-500 font-semibold">*</span>
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="HR Manager, CEO, etc."
                  className="p-2 mb-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-col items-start relative mb-4">
              <label className="mb-2 text-gray-700 font-medium">
                Phone Number{" "}
                <span className="text-red-500 font-semibold">*</span>
              </label>
              <LuPhone className="absolute left-3 top-11 text-gray-700" />
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                className="p-2 pl-9 mb-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Account Setup */}
            <div className="relative flex space-x-3 mb-5">
              <IoLockClosedOutline className="text-blue-700 text-2xl" />
              <p className="text-gray-600 font-bold mb-0">Account Setup</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 mb-4 w-full">
              <div className="flex flex-col items-start w-full">
                <label className="mb-2 text-gray-700 font-medium">
                  Password <span className="text-red-500 font-semibold">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="p-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col items-start w-full">
                <label className="mb-2 text-gray-700 font-medium">
                  Confirm Password{" "}
                  <span className="text-red-500 font-semibold">*</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="p-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <label className="mb-2 text-gray-700 font-semibold flex flex-start pt-2">
              Additional Information (Optional)
            </label>

            <div className="flex flex-col items-start relative mb-4 w-full">
              <label className="mb-2 text-gray-700 font-medium">
                Resume/CV (Optional)
              </label>
              <MdOutlineFileUpload className="absolute left-5 top-14 text-gray-700" />
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

            <div className="flex flex-col items-start mb-4 w-full">
              <label className="mb-2 text-gray-700 font-medium">
                Company Description
              </label>
              <textarea
                rows="4"
                placeholder="Brief description of your company and what you do..."
                className="p-2 text-gray-700 mb-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="mt-4 space-y-4 text-sm text-gray-700 bg-blue-300/25 border border-gray-300 rounded-lg p-4">
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
                    className="text-blue-600 font-semibold underline"
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

            <button
              type="submit"
              className="bg-[#7F4DFF] w-full text-white text-center py-2 rounded-xl mb-5 block mt-5"
            >
              Register Company
            </button>

            <div className="flex justify-center p-4">
              <p className="text-gray-700 font-medium">
                Already have an account?
              </p>
              <Link
                to="/signuppage"
                className="text-[#7F4DFF] font-semibold ml-1"
              >
                Sign up
              </Link>
            </div>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}
