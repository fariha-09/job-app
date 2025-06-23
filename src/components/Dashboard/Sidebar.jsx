import React from 'react';
import { LuBuilding2 } from "react-icons/lu";
import { VscGraph } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";
import { LuFileText } from "react-icons/lu";
import { TbUsers } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
  
    <div>
      <div className="w-68 bg-white shadow-lg h-screen border-r border-gray-300 flex flex-col ">
         <div className="flex items-center gap-2 mb-4 pt-4 px-5">
 <LuBuilding2  className="text-blue-700 text-2xl"/>
   <h1 className="text-blue-700 font-bold text-xl">ProHire</h1>
         </div>
          <div className='border-b border-gray-300 w-full'></div>
         
        <div className='flex items-center gap-2 mb-4 pt-4 px-5'>
            <VscGraph className='text-gray-700 font-medium'/>
  <h1  className='text-gray-700 font-medium'>Dashboard</h1>
          </div>
    
          
<div className='flex items-center gap-2 mb-4 py-2 px-5 bg-blue-100 rounded-lg border-r-3 border-blue-600 mx-1'>
<FaPlus className='text-blue-700'/>
<p className='text-blue-700 font-medium'>Post Job</p>
<p className='text-white bg-blue-600 rounded-[2rem] p-1 text-sm font-medium w-12 ml-18'>New</p>
</div>


 <div className='flex items-center gap-2 mb-4 px-5'>
            <LuFileText className='text-gray-700 font-medium'/>
  <Link to='/managejobs' className='text-gray-700 font-medium'>Manage Jobs</Link>
          </div>


           <div className='flex items-center gap-2 mb-4 px-5'>
            <TbUsers className='text-gray-700 font-medium'/>
  <h1  className='text-gray-700 font-medium'>Candidates</h1>
          </div>

           <div className='flex items-center gap-2 mb-4 px-5'>
            <IoSettingsOutline className='text-gray-700 font-medium'/>
  <h1  className='text-gray-700 font-medium'>Settings</h1>
          </div>


<div className="mt-8 bg-blue-100 p-4 mx-1 h-40 leading-[2] rounded border border-blue-300 ">
  <h1 className='font-medium text-blue-900 text-left'>Quick Post</h1>
        <p className="text-sm text-blue-700 text-left">Need to hire urgently? Post a job in under 2 minutes.</p>
        <button className="bg-blue-600 text-white px-3 py-1 mt-3 w-full rounded">Post Job Now</button>
      </div>


      </div>

    </div>
  );
}
