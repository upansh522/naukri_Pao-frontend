import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginPage =async (e) => {
    e.preventDefault(); 
    try {
      const formData={
        emailAddress: email,
        password: password
      }

      const response= await axios.post(`https://naukri-pao-backend.onrender.com/handleUserLogin`,formData,{
        withCredentials: true, // Include credentials (cookies) in request
    });   
    if (response.status===200)
    navigate('/user');
  }
     catch (error) {
      if (error.response) {
        console.error('Server responded with an error:', error.response.status, error.response.data);
    } else if (error.request) {
        console.error('No response received from server:', error.request);
    } else {
        console.error('Error setting up request:', error.message);
    }
    console.error('Error details:', error);
      
    }
   
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="/assets/Logo.png"
            className="mx-auto h-20 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleLoginPage} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="text-sm">
            <a href="/signup" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Create new account
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
