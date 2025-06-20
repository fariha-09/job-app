import React from "react";
import { LuBuilding2 } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { CiHome } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { LuFileText } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { LuTarget } from "react-icons/lu";
import { Search } from "lucide-react";
import { FiBell } from "react-icons/fi";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiAward } from "react-icons/fi";
import { LuDot } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa6";



export default function MinimalDashboard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="bg-blue-300/10">
      <div className="flex ">
        <div className="w-68 bg-white shadow-lg h-screen border-r border-gray-300 flex flex-col ">
          <div className="flex items-center gap-2 mb-4 pt-4 px-5">
            <LuBuilding2 className="text-blue-700 text-2xl" />
            <h1 className="text-blue-700 font-bold text-xl">ProHire</h1>
          </div>
          <div className="border-b border-gray-300 w-full"></div>
          <div className="flex items-center gap-2 mb-4 py-2 px-5  bg-blue-100 rounded-lg border-r-3 border-blue-600 mx-1 my-3">
            <CiHome className="text-blue-700 text-xl" />
            <h1 className="text-blue-700 font-medium">Dashboard</h1>
          </div>
          <div className="flex items-center gap-2 mb-4 py-2 px-5 ">
            <IoSearch className="text-gray-700" />
            <p className="text-gray-700 font-medium">Search Jobs</p>
          </div>

          <div className="flex items-center gap-2 mb-4 px-5">
            <FaRegBookmark className="text-gray-700 font-medium" />
            <h1 className="text-gray-700 font-medium">Saved Jobs</h1>
          </div>

          <div className="flex items-center gap-2 mb-4 px-5">
            <LuFileText className="text-gray-700 font-medium" />
            <h1 className="text-gray-700 font-medium">Applicants</h1>
            <p className="text-white bg-blue-600 rounded-[2rem] p-1 text-sm font-medium w-7 ml-20">
              5
            </p>
          </div>

          <div className="flex items-center gap-2 mb-4 px-5">
            <LuUser className="text-gray-700 font-medium" />
            <h1 className="text-gray-700 font-medium">Profile</h1>
          </div>

          <div className="flex items-center gap-2 mb-4 px-5">
            <IoSettingsOutline className="text-gray-700 font-medium" />
            <h1 className="text-gray-700 font-medium">Settings</h1>
          </div>

          <div className="mt-8 bg-purple-100/60 p-4 mx-3 h-40 leading-[2] rounded-xl border border-purple-100 ">
            <h1 className="font-medium text-blue-900 text-left">
              Career Goal Progress
            </h1>
            <div className="flex items-center gap-2 mb-2 ">
              <LuTarget className="text-sm text-blue-700 text-left" />
              <p className="text-sm text-blue-700 text-left">
                Software Engineer
              </p>
            </div>

            <div className="w-40 h-2 bg-blue-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-700  "
                style={{ width: "50%" }}
              ></div>
            </div>
            <p className="text-sm text-blue-700 mt-2 text-left">
              65% match rate
            </p>
          </div>
        </div>

        {/* dashboard */}
        <div>
          <div className="bg-white flex flex-row  p-2">
            <h1 className="text-xl text-left font-medium text-gray-800 pl-8 ">
              Job Search Dashboard
            </h1>
            <div className="relative flex mb-2 pl-95">
              <Search className="fa fa-user absolute left-97 top-2 text-gray-400 " />
              <input
                type="text"
                className="p-2 pl-9 border border-gray-400 rounded-xl"
              />
            </div>
            <FiBell className=" text-gray-400 w-8 h-8 text-sm pl-3 mt-2" />
            <button
              className="flex items-center gap-2 pl-4"
              onClick={handleClick}
            >
              <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full">
                JS
              </div>
              John Smith
            </button>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleClose}>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>

          <div className="border-b border-gray-300  w-full"></div>

          <div className="bg-blue-700 w-[98%] mx-2 my-4 leading-[2] rounded-lg text-left p-4 pl-6 shadow-md pb-5">
            <h1 className="text-white font-bold text-xl">
              Welcome Back, John!
            </h1>
            <p className="text-gray-200">
              Continue your job search journey.You have 3 new job matches!
            </p>
          </div>
          {/* boxes  */}
          <div className="flex  mt-5">
            {/* box 1 */}
            <div className="bg-white h-25 rounded-xl w-60 ml-2 flex justify-between shadow-md">
              <div className="pl-5 pt-3">
                <h1 className="text-left">Applications Sent</h1>
                <p className="font-bold text-left">24</p>
                <p className="text-blue-700 text-left text-sm">+3 this week</p>
              </div>
              <div className="bg-blue-100 p-3 h-10 rounded-lg mr-4 flex items-center justify-center mt-7">
                <LuFileText className="text-blue-700 font-medium" />
              </div>
            </div>
            {/* box 2 */}
            <div className="bg-white h-25 rounded-xl w-60 ml-5 flex justify-between shadow-md">
              <div className="pl-5 pt-3">
                <h1 className="text-left">Profile Views</h1>
                <p className="font-bold text-left">127</p>
                <p className="text-green-700 text-left text-sm">
                  +40% from last week
                </p>
              </div>
              <div className="bg-green-100 p-3 h-10 rounded-lg mr-4 flex items-center justify-center mt-7">
                <FaArrowTrendUp className="text-green-700 font-medium" />
              </div>
            </div>
            {/* box 3 */}
            <div className="bg-white h-25 rounded-xl w-60 ml-5 flex justify-between shadow-md">
              <div className="pl-5 pt-3">
                <h1 className="text-left">Saved Jobs</h1>
                <p className="font-bold text-left">12</p>
                <p className="text-purple-700 text-left text-sm">
                  6 new matches
                </p>
              </div>
              <div className="bg-purple-100 p-3 h-10 rounded-lg mr-4 flex items-center justify-center mt-7">
                <FaRegBookmark className="text-purple-700 font-medium" />
              </div>
            </div>
            {/* box 4 */}
            <div className="bg-white h-25 rounded-xl w-60 ml-5 flex justify-between shadow-md">
              <div className="pl-5 pt-3">
                <h1 className="text-left">Interviews </h1>
                <p className="font-bold text-left">3</p>
                <p className="text-orange-500 text-left text-sm">1 scheduled</p>
              </div>
              <div className="bg-orange-100 p-3 h-10 rounded-lg mr-4 flex items-center justify-center mt-7">
                <FiAward className="text-orange-500 font-medium" />
              </div>
            </div>
          </div>

          {/* two boxes */}
          <div className="flex w-full pt-5 px-3 space-x-5 ">
            <div className="bg-white rounded-lg border w-123 py-4 px-2 ">
              <h1 className="text-left font-bold text-xl p-4">
                Recent Applications
              </h1>

              <div className=" border-b border-gray-300  w-full"></div>

              <div className="flex items-start space-x-4 pb-3">
                <div className="bg-blue-100 h-12 w-12 flex items-center justify-center rounded-full mt-2">
                  <LuFileText className="text-blue-600 text-xl" />
                </div>

                <div className="flex flex-col mt-2">
                  <h1 className="text-xl font-semibold text-gray-800 mb-1 text-left ">
                    Senior React Developer
                  </h1>
                  <div className="flex items-center text-gray-600 text-sm">
                    <span>TechCorp Inc</span>
                    <LuDot />
                    <span>Applied 2 days ago</span>
                  </div>
                </div>
                <span className="px-2 py-1 rounded-full text-sm text-sm bg-yellow-100 text-yellow-700 mt-3 ml-26">
                  In Review
                </span>
              </div>

              <div className=" border-b border-gray-300 my-2 w-full"></div>

              <div className="flex items-start space-x-4 pb-3">
                <div className="bg-green-100 h-12 w-12 flex items-center justify-center rounded-full mt-2">
                  <FiAward className="text-green-600 text-xl" />
                </div>

                <div className="flex flex-col mt-2">
                  <h1 className="text-xl font-semibold text-gray-800 mb-1 text-left ">
                    Frontend Engineer
                  </h1>
                  <div className="flex items-center text-gray-600 text-sm">
                    <span>StartupCo </span>
                    <LuDot />
                    <span>Applied 5 days ago</span>
                  </div>
                </div>
                <span className="px-2 py-1 rounded-full text-sm text-sm bg-green-100 text-green-700 mt-3 ml-30">
                  Interview
                </span>
              </div>

              <div className=" border-b border-gray-300 my-2 w-full"></div>

              <div className="flex items-start space-x-4 pb-3">
                <div className="bg-gray-100 h-12 w-12 flex items-center justify-center rounded-full mt-2">
                  <LuFileText className="text-gray-600 text-xl" />
                </div>

                <div className="flex flex-col mt-2 mb-5">
                  <h1 className="text-xl font-semibold text-gray-800 mb-1 text-left">
                    UI/UX Developer
                  </h1>
                  <div className="flex items-center text-gray-600 text-sm">
                    <span>DesignHub</span>
                    <LuDot />
                    <span>Applied 1 week ago</span>
                  </div>
                </div>
                <span className="px-2 py-1 rounded-full text-sm text-sm bg-pink-200 text-pink-700 mt-3 ml-30">
                  Rejected
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg border w-123 pt-4 px-2 pb-6">
              <h1 className="text-left pb-3 font-bold text-xl p-4">
                Recommended Jobs
              </h1>
              <div className=" border-b border-gray-300 my-2 w-full"></div>
              <div className="flex items-start space-x-4 pb-3">
                <div className="flex flex-col mt-2 pl-4">
                  <h1 className="text-xl font-semibold text-gray-800  text-left ">
                    Full Stack Developer
                  </h1>
                  <div className="flex items-center text-gray-600 text-sm leading-[2] ">
                    <span>Innovatelnc Inc</span>
                    <LuDot />
                    <span>Remote</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <span>$80,000-$1,20,000</span>
                    <LuDot />
                    <span>Full-time</span>
                  </div>
                </div>
                <span className="px-2 py-1 rounded-full text-sm text-sm bg-blue-100 text-blue-700 mt-3 ml-40">
                  95% Match
                </span>
              </div>
              <div className="flex justify-start gap-3">
                <button className="bg-blue-600 text-white px-3 py-1 w-full rounded ml-4">
                  Apply Now
                </button>
                <button className="border border-gray-400 text-gray-700 font-medium px-3 py-1 rounded-md text-sm hover:bg-gray-100 transition  text-center">
                  Save
                </button>
              </div>
              <div className=" border-b border-gray-300 mt-6  w-full"></div>

              <div className="flex items-start space-x-4 pb-3">
                <div className="flex flex-col mt-2 pl-4">
                  <h1 className="text-xl font-semibold text-gray-800  text-left ">
                   React Developer
                  </h1>
                  <div className="flex items-center text-gray-600 text-sm leading-[2] ">
                    <span>WebSolutions</span>
                    <LuDot />
                    <span>New York,NY</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <span>$70,000-$95,000</span>
                    <LuDot />
                    <span>Full-time</span>
                  </div>
                </div>
                <span className="px-2 py-1 rounded-full text-sm text-sm bg-green-100 text-green-700 mt-3 ml-40">
                  88% Match
                </span>
              </div>
              <div className="flex justify-start gap-3 ">
                <button className="bg-blue-600 text-white px-3 py-1 w-full rounded ml-4">
                  Apply Now
                </button>
                <button className="border border-gray-400 text-gray-700 font-medium px-3 py-1 rounded-md text-sm hover:bg-gray-100 transition  text-center">
                  Save
                </button>
              </div>
            </div>
          </div>
          {/* boxes end */}
           <div className="bg-white w-[98%] mx-2 my-4 leading-[2] rounded-lg text-left p-4 pl-6 shadow-md">
 <h1 className="text-left pb-3 font-bold text-xl p-4">
               Upcoming Interviews
              </h1>
                <div className=" border-b border-gray-300 mt-6  w-full"></div>
                 <div className="bg-orange-100 w-[98%] mx-2 my-4 leading-[2] rounded-lg text-left p-4 pl-6 shadow-md">

 <div className="flex items-start space-x-4 pb-3">
                <div className="bg-orange-200 h-10 w-10 flex items-center justify-center rounded mt-2">
                  <FaRegCalendar className="text-orange-600 text-xl" />
                </div>

                <div className="flex flex-col mt-2">
                  <h1 className="text-xl font-semibold text-gray-800 mb-1 text-left ">
                    Frontend Engineer Interview
                  </h1>
                  <div className="flex items-center text-gray-600 text-sm">
                    <span>StartupCo </span>
                    <LuDot />
                    <span>Tomorrow at 2:00 PM</span>
                  </div>
<div className="flex items-center text-gray-600 text-sm">
                    <span>Google Meet </span>
                    <LuDot />
                    <span>45  minutes</span>
                  </div>

                </div>
                <button className="px-2 py-1 text-sm text-sm bg-orange-600 text-white rounded mt-3 ml-120">
                 Join Meeting
                </button>
              </div>
              </div>

                 
           </div>




        </div>
      </div>
    </div>
  );
}
