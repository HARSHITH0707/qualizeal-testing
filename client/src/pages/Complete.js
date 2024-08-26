import React, { useState } from 'react';
import SignupImage from '../components/SignupImage';
import { useNavigate } from 'react-router-dom';

const Complete = () => {
  const [formData, setFormData] = useState({
    password: '',
    cpassword: '',
    stayInformed: false,
    termsAccepted: false,
    privacyAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted || !formData.privacyAccepted) {
      alert("You must accept the terms of use and the privacy policy to proceed.");
      return;
    }
    console.log('Form submitted:', formData);
  };

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Left Side - Image with Overlay Text */}
      <SignupImage />
      {/* Right Side - Form */}
      <div className="flex-1 p-8 flex flex-col justify-center bg-white relative">
        <h2 className="text-2xl font-mono mb-2">Step 4:</h2>
        <h1 className='text-2xl font-serif mb-8'>The last step</h1>
        <h1 className='text-wrap font-serif mb-8'>
          Almost done! Please create a password for your account. Then review and accept our terms of use,
          TestersHive Guidelines, and privacy & security policy to complete the setup process.
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="w-full md:w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password*
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg border-b-4 text-gray-700 focus:outline-none focus:border-blue-500"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cpassword">
                Confirm password*
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg border-b-4 text-gray-700 focus:outline-none focus:border-blue-500"
                type="password"
                id="cpassword"
                name="cpassword"
                value={formData.cpassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="mb-4 bg-blue-50 w-3/4 px-4 py-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            <div className='text-blue-500'>
              <input
                type="checkbox"
                name="stayInformed"
                checked={formData.stayInformed}
                onChange={handleChange}
                className="mr-2"
              />
              STAY INFORMED! (optional)</div>Please keep me up-to-date via email on the latest projects and updates from uTest.
              This is not required but highly recommended in order to receive info as it becomes available.
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mr-2"
                required
              />
              I have read and accept the uTest Terms of Use and the uTest Guidelines
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <input
                type="checkbox"
                name="privacyAccepted"
                checked={formData.privacyAccepted}
                onChange={handleChange}
                className="mr-2"
                required
              />
              I have read and accept the Privacy & Security Policy
            </label>
          </div>

          <div className='flex justify-between'>
            <div className="flex justify-start mt-auto">
              <button
                className="bg-blue-500 text-white py-4 px-10 rounded-3xl hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-4"
                type="button" onClick={handleBackClick}
              >
               &lt; Previous 
              </button>
            </div>

            <div className="flex justify-end mt-auto">
              <button
                className="bg-blue-500 text-white py-4 px-10 rounded-3xl hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-4"
                type="submit"
              >
                Next &gt;
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Complete;