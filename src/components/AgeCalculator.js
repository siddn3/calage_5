// AgeCalculator.js
import React, { useState } from 'react';

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [ageResult, setAgeResult] = useState('');

  const calculateAge = () => {
    const dobDate = new Date(dob);
    const currentDate = new Date();

    const ageInMilliseconds = currentDate - dobDate;
    const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
    const age = Math.floor(ageInYears);

    currentDate.setFullYear(currentDate.getFullYear() - age);
    const monthDiff = currentDate.getMonth() - dobDate.getMonth();

    let months = monthDiff;
    if (currentDate.getDate() < dobDate.getDate()) {
      months--;
    }

    let days = currentDate.getDate() - dobDate.getDate();
    if (days < 0) {
      const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
      days = lastDayOfMonth - dobDate.getDate() + currentDate.getDate();
    }

    setAgeResult(`${age} years, ${months} months, ${days} days`);
  };

  return (
    <div className="container">
      <h1>Age Calculator</h1>
      <div className="form">
        <label htmlFor="dob">Date of Birth:</label>
        <input type="date" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
        <button onClick={calculateAge}>Calculate Age</button>
      </div>
      <div className="result">
        <p>Your age is:</p>
        <p id="ageResult">{ageResult}</p>
      </div>
    </div>
  );
};

export default AgeCalculator;
