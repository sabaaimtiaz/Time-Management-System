import React from 'react';
import './Home.css'; 
import Buttons from './Components/Buttons';
import logo from './Assets/Logo.png';
import { Scrollbars } from 'react-custom-scrollbars';
import DataTable from './Components/DataTable'; 
import ReportChart from './Components/ReportChart';

export const Home = () => {
  const buttonLabels = [
    'Actions', 'Holidays', 'Download', 'Regulize Attendance',
    'Manual Entry', 'Work from Home', 'Leave', 'Assign Office'
  ];
  
  return (
    <div className="container">
      <div className='header'>
        <h1>Time-off Internal Staff</h1> 
        <img className='img' src={logo} alt='logo'/>
      </div>
      
      <div className="row">
        <div className="col-sm-8">
          {/* Passes button labels as a prop to the Buttons component */}
          <Buttons buttons={buttonLabels} />
        </div>
        <div className="col-sm-4">
          <div className='h3'>
          <h3>Latest Activities</h3> </div>
          <div className='activity'>
            <Scrollbars className="scrollbar">
              <p className='p'>
                Some great news here to tell you guys. Some more text to demonstrate scrolling functionality.
                Some great news here to tell you guys. Some more text to demonstrate scrolling functionality.
                Some great news here to tell you guys. Some more text to demonstrate scrolling functionality.
                Some great news here to tell you guys. Some more text to demonstrate scrolling functionality.
              </p>
            </Scrollbars>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12-1">
       <ReportChart/>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12-2">
         <DataTable/>
        </div>
      </div>
    </div>
  );
};

export default Home;
