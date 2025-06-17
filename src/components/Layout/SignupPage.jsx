import Header from "./Header";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";
import { IoLockClosedOutline } from "react-icons/io5";
import { Briefcase } from "lucide-react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineFileUpload } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import Footer from "./Footer";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


export default function LoginPage() {
     const [showPassword, setShowPassword] = useState(false);
     const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const [step, setStep] = useState(1);
  const [experience, setExperience] = useState("");
  const [jobType, setJobType] = useState("");
  const [salaryRange, setSalaryRange] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    currentJobTitle: "",
    location: "",
    keySkills: "",
  });

  console.log("submiting data is", formData)

  const handleSubmit = async (e) => {
      e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match with confirm password");
      return;
    }
    try {
      const res =await fetch("https://job-portal-production-1bac.up.railway.app/api/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({...formData} ),
      });
      const data = await res.json();
      console.log("the signup data is",data)

      if (res.ok) {
        alert(data.message);
      } else {
        alert("signup failed");
      }
    } catch (error) {
      alert("Network error: " + error);
    } 
  };

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleContinue = () => {
    setStep(2);
  };
  const clickChange = () => {
    setStep(1);
  };
  return (
    <>
      <Header />
     {step === 1 ? (
  <section className="bg-blue-300/10 pb-20 flex justify-center px-4">
    <form className="bg-white w-full md:w-[50%] p-4 md:p-6 mt-10 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold mb-1">Create Your Account</h2>
      <p className="text-gray-600 mb-6">Basic information to get started</p>

      {/* Step Indicator */}
      <div className="flex items-center justify-center mb-8">
        <button
          onClick={handleContinue}
          className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full"
        >
          1
        </button>
        <div className="w-16 border-t border-gray-300"></div>
        <button
          onClick={clickChange}
          className="flex items-center justify-center w-8 h-8 bg-gray-300 text-gray-600 rounded-full"
        >
          2
        </button>
      </div>

      {/* First and Last Name */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex flex-col items-start relative w-full">
          <label className="mb-2 text-gray-700 font-medium">First Name</label>
          <RxPerson className="absolute left-3 top-11 text-gray-700" />
          <input
            type="text"
            placeholder="John"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="p-2 pl-9 mb-2 border border-gray-200 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col items-start relative w-full">
          <label className="mb-2 text-gray-700 font-medium">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            className="p-2 mb-2 border border-gray-200 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col items-start relative w-full mb-4">
        <label className="mb-2 text-gray-700 font-medium">Email Address</label>
        <HiOutlineMail className="absolute left-3 top-11 text-gray-700" />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className="p-2 pl-9 mb-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Phone Number */}
      <div className="flex flex-col items-start relative w-full mb-4">
        <label className="mb-2 text-gray-700 font-medium">Phone Number</label>
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

      {/* Password & Confirm Password */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex flex-col items-start relative w-full">
          <label className="mb-2 text-gray-700 font-medium">Password</label>
          <IoLockClosedOutline className="absolute left-3 top-11 text-gray-700" />
          <div className="relative w-full">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder=""
              className="p-2 pl-9 border border-gray-200 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start relative w-full">
          <label className="mb-2 text-gray-700 font-medium">Confirm Password</label>
          <IoLockClosedOutline className="absolute left-3 top-11 text-gray-700" />
          <div className="relative w-full">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder=""
              className="p-2 pl-9 border border-gray-200 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        className="bg-[#7F4DFF] w-full text-white text-center py-2 rounded-xl mb-5"
      >
        Continue
      </button>

      {/* Or Register With */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-grow h-px bg-gray-300"></div>
        <p className="text-gray-500 text-sm">Or register with</p>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      {/* Social Buttons */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="relative flex justify-center items-center py-2 pl-10 pr-4 border border-gray-200 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <FaGoogle className="absolute left-4 top-1/2 transform -translate-y-1/2" />
          <Link to="https://www.google.com/">Google</Link>
        </div>
        <div className="relative flex justify-center items-center py-2 pl-10 pr-4 border border-gray-200 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <FiLinkedin className="absolute left-4 top-1/2 transform -translate-y-1/2" />
          <Link to="">LinkedIn</Link>
        </div>
      </div>

      {/* Login Redirect */}
      <div className="flex flex-row justify-center">
        <p className="text-gray-700 font-medium">Already have an account? </p>
        <Link
          to="/loginpage"
          style={{ color: "#7F4DFF", fontWeight: 600 }}
        >
          {" "}Login
        </Link>
      </div>
    </form>
  </section>
) :  (
        <section className="bg-blue-300/10 pb-20 flex justify-center px-4">
  <form
    autoComplete="off"
    onSubmit={handleSubmit}
    className="bg-white w-full sm:w-[50%] p-4 sm:p-6 mt-10 rounded-lg shadow-md border border-gray-200"
  >
    <h2 className="text-xl font-semibold mb-1">Create Your Account</h2>
    <p className="text-gray-600 mb-6">
      Professional details to enhance your profile
    </p>

    <div className="flex items-center justify-center mb-8">
      <p className="flex items-center justify-center w-8 h-8 bg-gray-300 text-gray-600 rounded-full">1</p>
      <div className="w-16 border-t border-blue-500"></div>
      <p className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full">2</p>
    </div>

    <div className="flex flex-col sm:flex-row gap-4 mb-4 sm:ml-10">
      <div className="flex flex-col items-start relative w-full sm:w-1/2">
        <label className="mb-2 text-gray-700 font-medium">Current Job Title</label>
        <Briefcase className="absolute left-2 top-11 text-gray-400" />
        <input
          type="text"
          name="currentJobTitle"
          value={formData.currentJobTitle}
          onChange={handleChange}
          autoComplete="off"
          placeholder="Frontend Developer"
          className="p-2 pl-9 mb-2 border border-gray-200 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col items-start w-full sm:w-1/2">
        <label className="mb-2 text-gray-700 font-medium">Experience Level</label>
        <select
          className="p-2 w-full border mb-2 bg-white/30 border-gray-300 text-gray-700 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={experience}
          name="experience"
          onChange={(e) => setExperience(e.target.value)}
        >
          <option value="" disabled>Select experience</option>
          <option value="fresher">Fresher</option>
          <option value="1-year">1 Year</option>
          <option value="2-3-years">2–3 Years</option>
          <option value="4-5-years">4–5 Years</option>
          <option value="5plus">5+ Years</option>
        </select>
      </div>
    </div>

    <div className="flex flex-col items-start sm:ml-10 relative w-full">
      <label className="mb-2 text-gray-700 font-medium">Location</label>
      <CiLocationOn className="absolute left-3 top-11 text-gray-700" />
      <input
        type="text"
        value={formData.location}
        onChange={handleChange}
        name="location"
        autoComplete="off"
        placeholder="New York, NY"
        className="p-2 pl-9 mb-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div className="flex flex-col items-start sm:ml-10 mt-4 w-full">
      <label className="mb-2 text-gray-700 font-medium">Key Skills</label>
      <textarea
        rows="4"
        value={formData.keySkills}
        onChange={handleChange}
        name="keySkills"
        placeholder="React, JavaScript, TypeScript, Node.js..."
        className="p-2 text-gray-700 mb-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
    </div>

    <div className="flex flex-col items-start sm:ml-10 mt-4 w-full relative">
      <label className="mb-2 text-gray-700 font-medium">Resume/CV (Optional)</label>
      <MdOutlineFileUpload className="absolute left-5 top-12 text-gray-700" />
      <label
        htmlFor="resume-upload"
        className="cursor-pointer p-4 mb-2 w-full border-2 border-dotted border-gray-700 rounded-lg text-gray-500 text-sm text-center hover:bg-gray-50 transition"
      >
        Upload Resume (PDF, DOC, DOCX)
      </label>
      <input type="file" accept=".pdf,.doc,.docx" id="resume-upload" className="hidden" />
    </div>

    <div className="flex flex-col sm:flex-row gap-4 mb-4 sm:ml-10 mt-4">
      <div className="flex flex-col items-start relative w-full sm:w-1/2">
        <label className="mb-2 text-gray-700 font-medium">LinkedIn Profile</label>
        <FiLinkedin className="absolute left-3 top-11 text-gray-700" />
        <input
          type="url"
          placeholder="https://linkedin.com/in/..."
          className="p-2 pl-9 border border-gray-200 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col items-start relative w-full sm:w-1/2">
        <label className="mb-2 text-gray-700 font-medium">GitHub Profile</label>
        <LuGithub className="absolute left-3 top-11 text-gray-700" />
        <input
          type="url"
          placeholder="https://github.com/..."
          className="p-2 pl-9 border border-gray-200 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    <div className="flex flex-col items-start sm:ml-10 mt-4 w-full">
      <label className="mb-2 text-gray-700 font-medium">Portfolio Website</label>
      <input
        type="text"
        placeholder="https://yourportfolio.com"
        className="p-2 pl-4 mb-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div className="flex flex-col items-start sm:ml-10 mt-4 w-full">
      <label className="mb-2 text-gray-700 font-medium">Professional Bio</label>
      <textarea
        rows="4"
        placeholder="Tell us about yourself, your experience, and what you're looking for..."
        className="p-2 text-gray-700 mb-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
    </div>

    {/* Job Preferences */}
    <div className="bg-blue-300/3 border border-gray-300 w-full rounded-lg p-4 sm:ml-10 mt-5">
      <label className="mb-2 text-gray-700 font-semibold flex flex-start pb-2">Job Preferences (Optional)</label>

      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="flex flex-col items-start w-full sm:w-1/2">
          <label className="mb-2 text-gray-700 font-medium">Preferred Job Type</label>
          <select
            className="p-2 w-full border mb-2 bg-white/30 border-gray-300 text-gray-700 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="" disabled>Select Job Type</option>
            <option value="fresher">Full-time</option>
            <option value="1-year">Part-time</option>
            <option value="2-3-years">Contract</option>
            <option value="4-5-years">Internship</option>
            <option value="5plus">Remote</option>
          </select>
        </div>
        <div className="flex flex-col items-start w-full sm:w-1/2">
          <label className="mb-2 text-gray-700 font-medium">Expected Salary Range</label>
          <select
            className="p-2 w-full border mb-2 bg-white/30 border-gray-300 text-gray-700 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={salaryRange}
            onChange={(e) => setSalaryRange(e.target.value)}
          >
            <option value="" disabled>Select salary range</option>
            <option value="fresher">1000-2000</option>
            <option value="1-year">2000-3000</option>
            <option value="2-3-years">3000-5000</option>
            <option value="4-5-years">5000-10000</option>
            <option value="5plus">10000+</option>
          </select>
        </div>
      </div>

      <div className="flex items-start gap-2">
        <input type="checkbox" id="remote" className="mt-1 accent-blue-600" />
        <label htmlFor="remote">Open to remote work opportunities</label>
      </div>
    </div>

    {/* Terms Section */}
    <div className="mt-4 space-y-4 text-sm text-gray-700 bg-blue-300/25 border border-gray-300 w-full rounded-lg p-4 sm:ml-10">
      <div className="flex items-start gap-2">
        <input type="checkbox" id="terms" required className="mt-1 accent-blue-600" />
        <label htmlFor="terms">
          I agree to the{" "}
          <a href="/terms" className="text-blue-600 font-semibold underline">Terms of Service</a> and{" "}
          <a href="/privacy" className="text-blue-600 font-semibold underline">Privacy Policy</a>
          <span className="text-red-500 font-semibold">*</span>
        </label>
      </div>

      <div className="flex items-start gap-2">
        <input type="checkbox" id="alerts" className="mt-1 accent-blue-600" />
        <label htmlFor="alerts">I want to receive job alerts and career updates via email</label>
      </div>
    </div>

    <div className="flex justify-start gap-4 mt-6 p-2 sm:pl-10">
      <button
        onClick={clickChange}
        className="border border-gray-400 text-gray-700 font-medium px-4 py-2 rounded-md text-sm hover:bg-gray-100 transition w-30 text-center"
      >
        Previous
      </button>
      <button
        type="submit"
        className="bg-[#7F4DFF] text-white px-6 py-2 flex-1 rounded-md text-sm text-center hover:bg-[#693ce5] transition"
      >
        Create Account
      </button>
    </div>

    <div className="flex flex-row justify-center p-4">
      <p className="text-gray-700 font-medium mr-2">Already have an account?</p>
      <Link to="/signuppage" className="text-[#7F4DFF] font-semibold">Login</Link>
    </div>
  </form>
</section>
 )}
      <Footer />
    </>
  );
}