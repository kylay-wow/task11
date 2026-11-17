import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import StudentProfileCard from './StudentProfileCard';


function App() {
  return (
    <div>
      <h1>Student Directory</h1>

      <div className="student-container">
        {/* Replace with YOUR information: */}
        {/* ← REQUIRED */}
        <StudentProfileCard
          name="Gan Zhi Yun Kylie"
          studentId="202699467"  
          major="Computer Engineering"
          year={3}
          gpa={3.75}
        />
        {/* Add 2 more cards for classmates (use their real names): */}
        <StudentProfileCard name="Wang Yi Heng" studentId="202699474" major="Computer Engineering" year={2} gpa={3.5} />
        <StudentProfileCard name="Ooi Yong Wee" studentId="202699472" major="Computer Engineering" year={4} gpa={3.9} />
      </div>
    </div>
  );
}

export default App;
