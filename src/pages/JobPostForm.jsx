import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function JobPostForm() {
  const [formData, setFormData] = useState({
    jobid: '',
    recruiter_email: '',
    job_title: '',
    company: '',
    location: '',
    description: '',
    salary: '',
    skills: [],  // Skills as an array to handle multiple skills
    job_type: '',
    min_qualification: '',
    min_experience: '',
  });

  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSkillChange = (index, value) => {
    const newSkills = [...formData.skills];
    newSkills[index] = value;
    setFormData({ ...formData, skills: newSkills });
  };

  const handleAddSkill = () => {
    setFormData({ ...formData, skills: [...formData.skills, ''] });
  };

  const handleRemoveSkill = (index) => {
    const newSkills = formData.skills.filter((_, i) => i !== index);
    setFormData({ ...formData, skills: newSkills });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    console.log('Form data submitted:', formData); // Log form data for debugging

    try {
      // Replace 'your-api-endpoint' with your actual API endpoint
      const response = await axios.post('http://localhost:8080/handleJobPost', formData);
      console.log('Response:', response.data);
      navigate('/user')
      
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error);
      // Optionally, you can set an error state here to display an error message to the user
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-gray-600 mb-6">Post a New Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Existing form fields */}
        <div>
          <label htmlFor="jobid" className="block text-sm font-medium text-gray-600">Job Id</label>
          <input
            type="text"
            name="jobid"
            value={formData.jobid}
            onChange={handleChange}
            className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="job_title" className="block text-sm font-medium text-gray-600">Job Title</label>
          <input
            type="text"
            name="job_title"
            value={formData.job_title}
            onChange={handleChange}
            className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-600">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="recruiter_email" className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="text"
            name="recruiter_email"
            value={formData.recruiter_email}
            onChange={handleChange}
            className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-600">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
            rows="4"
            required
          />
        </div>
        <div>
          <label htmlFor="salary" className="block text-sm font-medium text-gray-600">Salary</label>
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
            required
          />
        </div>

        {/* Job Type dropdown */}
        <div>
          <label htmlFor="job_type" className="block text-sm font-medium text-gray-600">Job Type</label>
          <select
            name="job_type"
            value={formData.job_type}
            onChange={handleChange}
            className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
            required
          >
            <option value="">Select Job Type</option>
            <option value="Fulltime Job">Fulltime Job</option>
            <option value="Fulltime Internship">Fulltime Internship</option>
            <option value="PartTime Job">PartTime Job</option>
            <option value="PartTime Internship">PartTime Internship</option>
          </select>
        </div>

        {/* Minimum Qualification Required dropdown */}
        <div>
          <label htmlFor="min_qualification" className="block text-sm font-medium text-gray-600">Minimum Qualification Required</label>
          <select
            name="min_qualification"
            value={formData.min_qualification}
            onChange={handleChange}
            className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
            required
          >
            <option value="">Select Minimum Qualification</option>
            <option value="Graduation">Pursuing Graduation</option>
            <option value="Pursuing Post Graduation">Pursuing Post Graduation</option>
            <option value="Graduated">Graduated</option>
            <option value="Post Graduated">Post Graduated</option>
          </select>
        </div>

        {/* Minimum Experience Required dropdown */}
        <div>
          <label htmlFor="min_experience" className="block text-sm font-medium text-gray-600">Minimum Experience Required</label>
          <select
            name="min_experience"
            value={formData.min_experience}
            onChange={handleChange}
            className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
            required
          >
            <option value="">Select Minimum Experience</option>
            <option value="Freshers">Freshers</option>
            <option value="1-2 years">1-2 years</option>
            <option value="2-3 years">2-3 years</option>
            <option value="3-5 years">3-5 years</option>
            <option value="5+ years">5+ years</option>
          </select>
        </div>

        {/* Skills input */}
        <div>
  <label htmlFor="skills" className="block text-sm font-medium text-gray-600">Skills</label>
  
  {/* Render each skill input with remove button */}
  {formData.skills.map((skill, index) => (
    <div key={index} className="flex items-center mt-2">
      <input
        type="text"
        value={skill}
        onChange={(e) => handleSkillChange(index, e.target.value)}
        className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
        placeholder="Enter skill"
        name='skill'
      />
      <button
        type="button"
        onClick={() => handleRemoveSkill(index)}
        className="p-4 ml-2 bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-400"
      >
        Remove
      </button>
    </div>
  ))}
  
  {/* Button to add new skill */}
  <button
    type="button"
    onClick={handleAddSkill}
    className="mt-2 bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-400"
  >
    Add Skill
  </button>
</div>
        {/* Submit button */}
        <div>
          <button
            type="submit"
            className="w-full bg-orange-700 text-white py-2 px-4 rounded-md shadow-md hover:bg-orange-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
