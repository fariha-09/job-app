import { Route,Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Layout/Header';
import HeroSection from './components/Layout/HeroSection';
import Footer from './components/Layout/Footer';
import SignupPage from "./components/Layout/SignupPage";
import Signin from './components/Layout/Signin';
import RegisterCompany from './components/Layout/RegisterCompany';
import JobsList from './services/JobsList';
import Homepage from './components/Layout/Homepage';
import Jobdetails from './pages/JobDetails';
import ApplyJob from './services/ApplyJob';
import Sidebar from './components/Dashboard/Sidebar.jsx';
import Dbheader from './components/Dashboard/Dbheader.jsx';
import ComDashboard from './components/Dashboard/ComDashboard.jsx';
import Mainsection from './components/Dashboard/Mainsection.jsx';
import ManageJobs from './components/Dashboard/ManageJobs.jsx';
import WhatsAppChat from './pages/EmployerRegistration.jsx';
import MinimalDashboard from './components/Dashboard/MinimalDashboard.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
<Route path='/' element={<Homepage/>}/>
<Route path='/loginpage' element={<Signin/>}/>
<Route path='/signuppage' element={<SignupPage/>}/>
<Route path='/registercompany' element={<RegisterCompany/>}/>
<Route path='/jobslist' element={<JobsList/>}/>
<Route path='/jobdetails/:_id' element={<Jobdetails/>}/>
<Route path='/applyjob' element={<ApplyJob/>}/>
<Route path='/managejobs' element={<ManageJobs/>}/>
<Route path='/dashboard' element={<ComDashboard/>}/>
      </Routes>

{/* <MinimalDashboard/> */}
{/* <WhatsAppChat/> */}
{/* <ManageJobs/> */}
      {/* <ComDashboard/> */}

{/* <Sidebar/> */}
{/* <Dbheader/> */}
{/* <Mainsection/> */}



      {/* <ApplyJob/> 
       <Jobdetails/>

<JobsList/> 
       <Header/>
      <HeroSection/>
     <Footer/>  
     <LoginPage/> 
      <LoginPageSecond/>
      <Signin/> 
      <RegisterCompany/>  */}
    </div>
  );
}

export default App;
