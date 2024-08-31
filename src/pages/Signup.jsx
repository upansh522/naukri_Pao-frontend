import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const navigate = useNavigate();
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    dateofbirth: '',
    mobileno: '',
    fulladdress: '',
    postalCode: '',
    state: '',
    country: '',
    organization: '',
    role: '', 
    password: '',
    sex: '',
    resume: null,
    experience: '',
    currentStudies: '', // Added currentStudies state
    highestDegree: '', // Added highestDegree state
    skills: [],
    projects: [],
    lookingfor: '',
  });

  const handleProjectChange = (index, field, value) => {
    const newProjects = [...formData.projects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    setFormData({ ...formData, projects: newProjects });
  };
  
    const handleAddProject = () => {
      setFormData({ ...formData, projects: [...formData.projects, { name: '', description: '' }] });
    };
  
    const handleRemoveProject = (index) => {
      const newProjects = formData.projects.filter((_, i) => i !== index);
      setFormData({ ...formData, projects: newProjects });
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
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleNextStep = () => {
      if (formStep === 0) {
        setFormStep(1);
      }
    };
  
    const handlePreviousStep = () => {
      setFormStep(0);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();  
      try {
          // Send POST request to the server
          const response = await axios.post(`https://naukri-pao-backend.onrender.com/handleUserSignup`, formData, {
              withCredentials: true, // Include credentials (cookies) in request
          });

          
  
          // Handle success response
          if (response.status === 201) {
              console.log('Signup successful:', response.data);
              navigate('/user'); // Navigate to the user page
          } else {
              console.error('Signup failed:', response.status, response.statusText);
          }
      } catch (error) {
          // Axios errors can be handled here for better debugging
          if (error.response) {
              // Server responded with a status other than 2xx
              console.error('Server responded with an error:', error.response.status, error.response.data);
          } else if (error.request) {
              // No response received from server
              console.error('No response received from server:', error.request);
          } else {
              // Error setting up the request
              console.error('Error setting up request:', error.message);
          }
          console.error('Error details:', error);
      }
  };
  
    
  
    return (
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-lg">
          <img
            className="mx-auto h-20 w-auto"
            src="/assets/Logo.png"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight ">
            {formStep === 0 ? 'Create your account' : 'Professional Details'}
          </h2>
        </div>
  
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg p-4 rounded-md">
          {formStep === 0 ? (
            // Step 1: Personal and Account Information Form
            <form className="space-y-6">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-900">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
                />
              </div>
  
              {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                name="emailAddress"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                name="dateofbirth"
                id="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
              />
            </div>
            {/* sex*/}
            <div>
              <label htmlFor="sex" className="block text-sm font-medium text-gray-700">
                Sex
              </label>
              <select
                name="sex"
                id="sex"
                value={formData.sex}
                onChange={handleChange}
                required
                className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobileno"
                id="mobile"
                value={formData.mobileno}
                onChange={handleChange}
                required
                className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
              />
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Full Address
              </label>
              <textarea
                name="fulladdress"
                id="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
              />
            </div>

            {/* Postal Code */}
            <div>
              <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
                Postal Code
              </label>
              <input
                type="text"
                name="postalCode"
                id="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                required
                className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
              />
            </div>

            {/* State */}
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                State
              </label>
              <input
                type="text"
                name="state"
                id="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
              />
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <input
                type="text"
                name="country"
                id="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
              />
            </div>

            {/* Organization */}
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                Organization
              </label>
              <input
                type="text"
                name="organization"
                id="organization"
                value={formData.organization}
                onChange={handleChange}
                className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
              />
            </div>

            {/* User Type */}
            <div>
              <label htmlFor="userType" className="block text-sm font-medium text-gray-700">
                You are a:
              </label>
              <select
                name="role"
                id="userType"
                value={formData.userType}
                onChange={handleChange}
                required
                className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
              >
                <option value="Recruiter">Recruiter</option>
                <option value="Job Seeker">Job Seeker</option>
              </select>
            </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
                />
              </div>  
              <div>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-orange-700"
                >
                  Next
                </button>
              </div>
            </form>
          ) : (
            // Step 2: Professional Details Form
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Resume Upload */}
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-900">
                  Resume Upload
                </label>
                <input
                  type="file"
                  name="resumefilepath"
                  id="resume"
                  onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
                  className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
                />
              </div>
  
              {/* Experience */}
              <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-600">Minimum Experience Required</label>
          <select
            name="experience"
            value={formData.experience}
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
  
              {/* Current Studies */}
              <div>
                <label htmlFor="currentStudies" className="block text-sm font-medium text-gray-900">
                  Current Studies
                </label>
                <select
                  name="currentStudies"
                  id="currentStudies"
                  value={formData.currentStudies}
                  onChange={handleChange}
                  className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
                >
                 <option value="">Select Minimum Qualification</option>
            <option value="Graduation">Pursuing Graduation</option>
            <option value="Pursuing Post Graduation">Pursuing Post Graduation</option>
            <option value="Graduated">Graduated</option>
            <option value="Post Graduated">Post Graduated</option>
                </select>
              </div>
  
              {/* Highest Degree */}
              <div>
                <label htmlFor="highestDegree" className="block text-sm font-medium text-gray-900">
                  Highest Degree
                </label>
                <select
                  name="highestDegree"
                  id="highestDegree"
                  value={formData.highestDegree}
                  onChange={handleChange}
                  className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
                >
                 <option value="">Select Minimum Qualification</option>
            <option value="Graduation">Pursing Graduation</option>
            <option value="Pursuing Post Graduation">Pursuing Post Graduation</option>
            <option value="Graduated">Graduated</option>
            <option value="Post Graduated">Post Graduated</option>
                </select>
              </div>
  
              {/* Skills */}
              <div>
                <label htmlFor="skills" className="block text-sm font-medium text-gray-900">
                  Skills
                </label>
                <div className="mt-2 space-y-4">
                  {formData.skills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={skill}
                        onChange={(e) => handleSkillChange(index, e.target.value)}
                        className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
                        placeholder={`Skill ${index + 1}`}
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
                  <button
                    type="button"
                    onClick={handleAddSkill}
                    className="mt-2 bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-400"
                  >
                    Add Skill
                  </button>
                </div>
              </div>
  
              {/* Projects */}
              <div>
                <label htmlFor="projects" className="block text-sm font-medium text-gray-900">
                  Projects
                </label>
                <div className="mt-2 space-y-4">
                  {formData.projects.map((project, index) => (
                    <div key={index} className="space-y-2">
                      <input
                        type="text"
                        value={project.name}
                        onChange={(e) => handleProjectChange(index, 'name', e.target.value)}
                        className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
                        placeholder={`Project Name ${index + 1}`}
                      />
                      <textarea
                        value={project.description}
                        onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                        className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
                        placeholder={`Project Description ${index + 1}`}
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveProject(index)}
                        className="p-4 ml-2 bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-400"
                      >
                        Remove Project
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handleAddProject}
                    className="mt-2 bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-400"
                  >
                    Add Project
                  </button>
                </div>
              </div>
  
              {/* Looking For */}
              <div>
          <label htmlFor="lookingfor" className="block text-sm font-medium text-gray-600">Job Type</label>
          <select
            name="lookingfor"
            value={formData.lookingfor}
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
  
              <div className="flex justify-between gap-2">
                <button
                  type="button"
                  onClick={handlePreviousStep}
                  className="mt-4 w-full flex justify-center rounded-md border border-transparent bg-gray-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="mt-4 w-full flex justify-center rounded-md border border-transparent bg-orange-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    );
  }
  