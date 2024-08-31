import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobList from './JobPost';  // Change this import to JobList to handle a list of jobs
import Sidebar from './Sidebar';
import './Dashboard.css';

const Dashboard = () => {
  const [recommendedJobs, setRecommendedJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState({
    recommendedJobs: [],
  });

  // Fetch jobs data from the server when the component mounts
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:8080/handleJobRecommendation', {
          withCredentials: true // This ensures cookies are sent with the request
        });
        const jobsData = response.data;

        // Assuming the response contains recommendedJobs and otherJobs
        setRecommendedJobs(jobsData || []);
        setFilteredJobs({
          recommendedJobs: jobsData || [],
        });
      } catch (error) {
        console.error('Error fetching jobs data:', error);
      }
    };
    fetchJobs();
  }, []); 

  const handleFilterChange = ({ minBasePay, location }) => {
    const filterJobs = (jobs) =>
      jobs.filter(
        (job) => job.salary >= minBasePay && (location === '' || job.location === location)
      );

    setFilteredJobs({
      recommendedJobs: filterJobs(recommendedJobs),
    });


    console.log(filteredJobs);
  };

  return (
    <div className="flex">
      <Sidebar onFilterChange={handleFilterChange} />
      <div className="flex-1 bg-white px-5 sm:py-32">
        <div className="text-black-800 flex flex-wrap job-section">
          <h3 className="w-full">Recommended Openings</h3>
          <JobList jobs={filteredJobs.recommendedJobs} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
