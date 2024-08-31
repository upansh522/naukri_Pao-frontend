import React from 'react';
import './jobpost.css';

const JobPost = ({ job }) => {
  return (
    <div className="job-post-card border-gray-400 bg-white shadow-md rounded-lg overflow-hidden p-4 flex flex-col">
      {/* Job Details */}
      <div className="flex flex-col justify-between leading-normal mb-4">
        <p className="text-sm text-gray-600 flex items-center">
          <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
          </svg>
          {job.job_type}
        </p>
        <div className="job-title text-gray-900 font-bold text-xl mb-2">{job.job_title}</div>
        <p className="text-gray-700 text-base">{job.description}</p>
      </div>
      
      {/* Salary and Skills */}
      <div className="mb-4">
        <p className="text-gray-700 text-base font-bold">Salary: {job.salary} CTC</p>
        <p className="text-gray-700 text-base font-bold">Skills Required:</p>
        <div className="skills flex flex-wrap">
          {job.skills.map((skill, index) => (
            <span key={index} className="skill-badge bg-blue-200 text-blue-800 px-2 py-1 rounded-full mr-2 mb-2">{skill}</span>
          ))}
        </div>
      </div>

      {/* Company and Location */}
      <div className="text-sm text-gray-600">
        <p className="text-gray-900 leading-none">{job.company}</p>
        <p className="text-gray-600">{job.location}</p>
      </div>
    </div>
  );
};

// JobList component to handle a list of jobs
const JobList = ({ jobs }) => {
  return (
    <div className="job-list grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <JobPost key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
