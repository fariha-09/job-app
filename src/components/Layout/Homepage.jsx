import React from 'react';
import Header from "./Header";
import JobsList from '../../services/JobsList';
import HeroSection from './HeroSection';
import Footer from './Footer';

export default function Homepage() {
  return (
    <div>
     <Header/>
     <HeroSection/>
     <JobsList/>
     <Footer/>
    </div>
  );
}
