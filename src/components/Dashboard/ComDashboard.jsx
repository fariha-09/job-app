import Sidebar from './Sidebar';
import Dbheader from './Dbheader';
import Mainsection from './Mainsection';
import { useState } from 'react';

export default function ComDashboard() {
  //  const [step, setStep] = useState(1);
  return (
    <div>
      <div className='flex'>
        <div>
<Sidebar/>
        </div>
      
      <div>
        <Dbheader/>
        <Mainsection/>
      </div>
    </div>
    </div>
  );
}
