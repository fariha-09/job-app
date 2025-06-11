import Sidebar from './Sidebar';
import React from 'react';
import Dbheader from './Dbheader';

export default function ComDashboard() {
  return (
    <div>
      <div className='flex'>
<Sidebar/>
<Dbheader/>
      </div>
    </div>
  );
}
