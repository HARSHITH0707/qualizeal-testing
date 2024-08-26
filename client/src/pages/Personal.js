import React, { useState } from 'react';
import SignupImage from '../components/SignupImage';
import { useNavigate } from 'react-router-dom';

const Personal = () => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    email: '',
    dateOfBirth: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const navigate = useNavigate();
  
  const isFormValid = () => {
    return formData.FirstName && formData.LastName && formData.email && formData.dateOfBirth;
  };

  const handleClick = () => {
    if (isFormValid()) {
      navigate('/Address');
    } else {
      alert('Please fill in all the details before proceeding.');
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Left Side - Image with Overlay Text */}
      <SignupImage />
      {/* Right Side - Stylish Form Container */}
      <div className="flex-1 p-8 flex flex-col justify-center bg-white relative rounded-lg shadow-lg md:shadow-2xl ">
        <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
          <h2 className="text-3xl font-extrabold mb-2">Step 1:</h2>
          <h1 className="text-4xl font-serif mb-8">Tell Us About Yourself</h1>
          <p className="text-base font-light mb-8">
            Let's start setting up your account. We ask your age to ensure we meet privacy laws and it also helps brands
            reach out to the exact people they need to help them.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded-xl shadow-md mt-8">
          <div className="flex flex-col gap-4 mb-4">
            <div className="w-full">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="FirstName">
                First Name*
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-purple-500 shadow-sm transition-transform duration-300 hover:scale-105"
                type="text"
                id="FirstName"
                name="FirstName"
                value={formData.FirstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="LastName">
                Last Name*
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-purple-500 shadow-sm transition-transform duration-300 hover:scale-105"
                type="text"
                id="LastName"
                name="LastName"
                value={formData.LastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email*
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-purple-500 shadow-sm transition-transform duration-300 hover:scale-105"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="dateOfBirth">
              Date Of Birth*
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-purple-500 shadow-sm transition-transform duration-300 hover:scale-105"
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-end mt-auto">
            <button
              className="bg-purple-500 text-white py-4 px-10 rounded-3xl hover:bg-purple-600 focus:outline-none focus:bg-purple-600 mt-4 shadow-lg transition-transform duration-300 hover:scale-105"
              type="submit"
              onClick={handleClick}
            >
              Next &gt;
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Personal;
