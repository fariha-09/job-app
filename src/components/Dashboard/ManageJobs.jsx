import React from 'react';
import Sidebar from './Sidebar';
import Dbheader from './Dbheader';
import JobSection from './JobSection';

export default function ManageJobs() {
  return (
    <div>
      <div className='flex'>
              <div>
      <Sidebar/>
              </div>
            
            <div>
              <Dbheader/>
             <JobSection/>
            </div>
          </div>
    </div>
  );
}
