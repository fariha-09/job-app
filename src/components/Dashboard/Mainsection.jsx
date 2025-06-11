import { Link } from 'lucide-react';
import { useState } from 'react';
import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { LuBuilding2 } from "react-icons/lu";
import { LuFileText } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { LuGraduationCap } from "react-icons/lu";
import { FiDollarSign } from "react-icons/fi";
import { Lightbulb } from 'lucide-react';

export default function Mainsection() {
    const [step, setStep] = useState(1);
  return (
    <div>
      <div className='bg-blue-300/10 h-180 pt-4 '>
    
<div className='bg-white h-15 mx-10 flex items-center justify-between px-6 '> 

    <div className="flex items-center space-x-2">
        <FaArrowLeft className='text-gray-600  cursor-pointer'/>
<button onClick={() => setStep(step - 1)} className="text-gray-600"> Back</button>
      <h2 className="text-2xl font-bold pl-5">Post a Job</h2>
    </div>

<div className='h-10 w-30 border rounded-xl border-gray-400 text-gray-900 font-medium flex flex-row p-2  ml-110'>
  < AiOutlineEye className='mt-1 mr-2 font-medium'/>
<p className=''>Preview</p>
</div>
<div className='h-10 w-30 border rounded-xl border-gray-400  text-gray-900 font-medium  p-2 mr-60 '>
<p>Save Draft</p>
</div>
</div>

<div className='flex justify-center'>
    <div className='bg-white w-64 mt-7 leading-[2] rounded-2xl pb-5'>
        <h1 className='text-xl font-medium text-left p-4'>Progress</h1>
<button className='flex items-center gap-2 mb-4 px-5'>
            <LuBuilding2  className="text-gray-700 font-medium"/> 
  <h1  className='text-gray-600 font-medium'>Basic Info</h1>
          </button>

          <button className='flex items-center gap-2 mb-4 px-5'>
            <LuFileText  className="text-gray-700 font-medium"/> 
  <h1  className='text-gray-600 font-medium'>Job Details</h1>
          </button>

<button className='flex items-center gap-2 mb-4 px-5'>
            <LuGraduationCap  className="text-gray-700 font-medium"/> 
  <h1  className='text-gray-600 font-medium'>Requirements</h1>
          </button>

          <button className='flex items-center gap-2 mb-4 px-5'>
            <FiDollarSign  className="text-gray-700 font-medium"/> 
  <h1  className='text-gray-600 font-medium'>Compensation</h1>
          </button>

            <button className='flex items-center gap-2 mb-4 px-5'>
            <IoSettingsOutline  className="text-gray-700 font-medium"/> 
  <h1  className='text-gray-600 font-medium'>Application</h1>
          </button>
 <div className='border-b border-gray-300 mx-6'></div>
 <div className='bg-blue-100 m-4 rounded p-4'>
    <div className='flex flex-row '>
        <Lightbulb className='w-5 h-5 text-yellow-500 mt-2'/>
 <h1 className='font-medium text-blue-900 text-left pl-2'>Tip</h1>
    </div>
        <p className="text-sm text-blue-700 text-left">Use clear,specific job titles that candidates would search for.</p>
 </div>
    </div>
</div>


</div>

    </div>
  );
}
