import React from "react";
import { MdSaveAlt } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { VscGraph } from "react-icons/vsc";
import { TbUsers } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { FiFilter } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import {
  FaEye,
  FaPen,
  FaTrash,
  FaEllipsisV,
  FaPlay,
} from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { PiPauseDuotone } from "react-icons/pi";
import { RxCrossCircled } from "react-icons/rx";
import { IoAlertCircleOutline } from "react-icons/io5";
import { FaRegCalendar } from "react-icons/fa6";



export default function JobSection() {
  return (
    <div className="bg-blue-300/10 pb-10">
      <div className="pt-5 flex justify-between">
        <div className="pl-10">
          <h1 className="text-xl text-left font-bold text-gray-800">
            Manage Jobs
          </h1>
          <p>Track and manage your job postings</p>
        </div>
        <div className="flex flex-row">
          <div className="h-10 w-30 border flex flex-row mr-5 rounded-xl border-gray-400 text-gray-900 font-medium p-2 ">
            <MdSaveAlt className="mt-1 mr-2 font-medium" />
            <p>Export</p>
          </div>

          <div className="h-10 w-40 border mr-5 bg-blue-600 rounded-xl border-gray-400 text-white flex flex-row font-medium p-2">
            <FaPlus className="mt-1 mr-2 font-medium" />
            <p>Post a new job</p>
          </div>
        </div>
      </div>

      {/* boxes  */}
      <div className="flex space-x-4 mt-5">
        {/* box 1 */}
        <div className="bg-white h-25 rounded-xl w-55 ml-2 flex justify-between shadow-md">
          <div className="pl-5 pt-3">
            <h1 className="text-left">Total Jobs</h1>
            <p className="font-bold text-left">5</p>
            <p className="text-blue-700 text-left">2 Active</p>
          </div>
          <div className="bg-blue-100 p-3 h-10 rounded-lg mr-4 flex items-center justify-center mt-7">
            <VscGraph className="text-blue-700 font-medium" />
          </div>
        </div>
        {/* box 2 */}
        <div className="bg-white h-25 rounded-xl w-55 ml-5 flex justify-between shadow-md">
          <div className="pl-5 pt-3">
            <h1 className="text-left">Total Applications</h1>
            <p className="font-bold text-left">115</p>
            <p className="text-green-700 text-left">Across all jobs</p>
          </div>
          <div className="bg-green-100 p-3 h-10 rounded-lg mr-4 flex items-center justify-center mt-7">
            <TbUsers className="text-green-700 font-medium" />
          </div>
        </div>
        {/* box 3 */}
        <div className="bg-white h-25 rounded-xl w-55 ml-5 flex justify-between shadow-md">
          <div className="pl-5 pt-3">
            <h1 className="text-left">Total Views</h1>
            <p className="font-bold text-left">655</p>
            <p className="text-purple-700 text-left">This Month</p>
          </div>
          <div className="bg-purple-100 p-3 h-10 rounded-lg mr-4 flex items-center justify-center mt-7">
            <VscGraph className="text-purple-700 font-medium" />
          </div>
        </div>
        {/* box 4 */}
        <div className="bg-white h-25 rounded-xl w-55 ml-5 flex justify-between shadow-md">
          <div className="pl-5 pt-3">
            <h1 className="text-left">Avg.Applictions</h1>
            <p className="font-bold text-left">58</p>
            <p className="text-orange-500 text-left">Per job</p>
          </div>
          <div className="bg-orange-100 p-3 h-10 rounded-lg mr-4 flex items-center justify-center mt-7">
            <VscGraph className="text-orange-500 font-medium" />
          </div>
        </div>
      </div>

      <div className="bg-white h-20 w-[1000px] mt-5 rounded-xl mx-3 flex items-center justify-between px-4 space-x-4">
        <div className="relative w-2/5">
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
          <input
            type="text"
            className="pl-10 p-2 border border-gray-200 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search jobs by title and department..."
          />
        </div>

        <select
          name="locationType"
          // value={formData.locationType}
          // onChange={handleChange}
          className="p-2 border w-40 ml-60 border-gray-300 bg-white/30 text-gray-700 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled selected>
            All Status
          </option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Pending">Pending</option>
          <option value="Closed">Closed</option>
          <option value="Draft">Draft</option>
        </select>

        <button className="flex items-center border px-4 py-2 rounded-xl text-gray-700 font-medium hover:bg-gray-100">
          <FiFilter className="text-lg" />
          <span>More Filters</span>
        </button>
      </div>

      {/* job table */}
      <div className="bg-white mt-5 mx-3 rounded-xl p-5">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left text-gray-700 border-b">
              <th className="p-3">Job</th>
              <th className="p-3">Status</th>
              <th className="p-3">Applications</th>
              <th className="p-3">Views</th>
              <th className="p-3">Posted</th>
              <th className="p-3">Deadline</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {/* Row 1 */}

            <tr className="border-b hover:bg-gray-50">
              <td className="p-3 flex items-start">
                {/* Black Checkbox */}
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 mt-2 text-black mr-3 cursor-pointer"
                />
                <div className="flex flex-col text-left">
                  <span className="font-bold text-gray-900">
                    Senior Frontend Developer
                  </span>
                 <span className="text-sm text-gray-500 flex items-center">
  <IoLocationOutline className="mr-1" />
  New York, NY | Full-time | $100,000 - $120,000
</span>
                </div>
              </td>
             <td className="p-3">
  <span className="flex items-center px-2 py-1 rounded-full text-sm bg-green-100 text-green-700">
    <IoMdCheckmarkCircleOutline className="mr-1" />
    Active
  </span>
</td>
              <td className="p-3">
                24{" "}
                <span className="text-green-600 text-sm">(5 interviews)</span>
              </td>
              <td className="p-3 flex items-center"><FaEye className="mr-1"/>156</td>
              <td className="p-3 flex items-center"><FaRegCalendar className="mr-1"/>1/15/2024</td>
              <td className="p-3">2/15/2024</td>
              <td className="p-3 flex space-x-2">
                <FaPen className="text-gray-600 cursor-pointer" />
                <FaTrash className="text-red-500 cursor-pointer" />
                <FaEllipsisV className="text-gray-500 cursor-pointer" />
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3 flex items-start">
                {/* Black Checkbox */}
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 mt-2 text-black mr-3 cursor-pointer"
                />
                <div className="flex flex-col text-left">
                  <span className="font-bold text-gray-900">
                    Product Manager
                  </span>
                 <span className="text-sm text-gray-500 flex items-center"><IoLocationOutline  className="mr-1"/>
                    Remote | Full-time | $95,000 - $130,000
                  </span>
                </div>
              </td>
              <td className="p-3">
                <span className="flex items-center px-2 py-1 rounded-full text-sm bg-green-100 text-green-700">
    <IoMdCheckmarkCircleOutline className="mr-1" />
    Active
  </span>
              </td>
              <td className="p-3">
                42{" "}
                <span className="text-green-600 text-sm">(8 interviews)</span>
              </td>
              <td className="p-3 flex items-center"><FaEye className="mr-1"/>298</td>
              <td className="p-3 flex items-center"><FaRegCalendar className="mr-1"/>1/10/2024</td>
              <td className="p-3">2/10/2024</td>
              <td className="p-3 flex space-x-2">
                <FaPen className="text-gray-600 cursor-pointer" />
                <FaTrash className="text-red-500 cursor-pointer" />
                <FaEllipsisV className="text-gray-500 cursor-pointer" />
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3 flex items-start">
                {/* Black Checkbox */}
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 mt-2 text-black mr-3 cursor-pointer"
                />
                <div className="flex flex-col text-left">
                  <span className="font-bold text-gray-900">UX Designer</span>
                 <span className="text-sm text-gray-500 flex items-center"><IoLocationOutline className="mr-1"/>
                    San Francisco, CA | Full-time | $70,000 - $95,000
                  </span>
                </div>
              </td>
              <td className="p-3">
                <span className="flex items-center px-2 py-1 rounded-full text-sm text-sm bg-yellow-100 text-yellow-700"><PiPauseDuotone  className="mr-1"/>
                  Paused
                </span>
              </td>
              <td className="p-3">
                18{" "}
                <span className="text-green-600 text-sm">(8 interviews)</span>
              </td>
              <td className="p-3 flex items-center"><FaEye className="mr-1"/>89</td>
              <td className="p-3 flex items-center"><FaRegCalendar className="mr-1"/>1/5/2024</td>
              <td className="p-3">2/5/2024</td>
              <td className="p-3 flex space-x-2">
                <FaPlay className="text-blue-500 cursor-pointer" />
                <FaPen className="text-gray-600 cursor-pointer" />
                <FaTrash className="text-red-500 cursor-pointer" />
                <FaEllipsisV className="text-gray-500 cursor-pointer" />
              </td>
            </tr>

            {/* Row 4 */}
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3 flex items-start">
                {/* Black Checkbox */}
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 mt-2 text-black mr-3 cursor-pointer"
                />
                <div className="flex flex-col text-left">
                  <span className="font-bold text-gray-900">
                    Marketing Specialist
                  </span>
                 <span className="text-sm text-gray-500 flex items-center"><IoLocationOutline className="mr-1"/>
                    Chicago, IL | Full-time | $45,000 - $60,000
                  </span>
                </div>
              </td>
              <td className="p-3">
                <span className="flex items-center px-2 py-1 rounded-full text-sm bg-gray-200 text-gray-600"><RxCrossCircled className="mr-1"/>
                  Closed
                </span>
              </td>
              <td className="p-3">31 <span className="text-green-600 text-sm">(6 interviews)</span></td>

              <td className="p-3 flex items-center"><FaEye className="mr-1"/>112</td>
              <td className="p-3 flex items-center"><FaRegCalendar className="mr-1"/>12/20/2023</td>
              <td className="p-3">1/20/2024</td>
              <td className="p-3 flex space-x-2">
                <FaPen className="text-gray-600 cursor-pointer" />
                <FaTrash className="text-red-500 cursor-pointer" />
                <FaEllipsisV className="text-gray-500 cursor-pointer" />
              </td>
            </tr>

            {/* Row 5 */}
            <tr className="hover:bg-gray-50">
              <td className="p-3 flex items-start">
                {/* Black Checkbox */}
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 mt-2 text-black mr-3 cursor-pointer"
                />
                <div className="flex flex-col text-left">
                  <span className="font-bold text-gray-900">Data Analyst</span>
                 <span className="text-sm text-gray-500 flex items-center"><IoLocationOutline className="mr-1"/>
                    Boston, MA | Contract | $65,000 - $85,000
                  </span>
                </div>
              </td>
              <td className="p-3">
                <span className="flex items-center px-2 py-1 rounded-full text-sm bg-blue-100 text-blue-700"><IoAlertCircleOutline className="mr-1"/>
                  Draft
                </span>
              </td>
              <td className="p-3">0</td>
              <td className="p-3 flex items-center"><FaEye className="mr-1"/>0</td>
              <td className="p-3 flex items-center"><FaRegCalendar className="mr-1"/>Not posted</td>
              <td className="p-3">-</td>
              <td className="p-3 flex space-x-2">
                <FaPen className="text-gray-600 cursor-pointer" />
                <FaTrash className="text-red-500 cursor-pointer" />
                <FaEllipsisV className="text-gray-500 cursor-pointer" />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-600">Showing 1 to 5 of 5 results</p>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border rounded-md text-gray-700">
              Previous
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded-md">
              1
            </button>
            <button className="px-3 py-1 border rounded-md text-gray-700">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
