import React, { useState } from 'react';
import SignupImage from '../components/SignupImage';
import { useNavigate } from 'react-router-dom';

const Devices = () => {
  const [formData, setFormData] = useState({
    computer: '',
    version: '',
    language: '',
    mobile:'',
    model:'',
    os:'',
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
    return formData.computer && formData.version && formData.language && formData.mobile && formData.model && formData.os;
  };

  const handleNextClick = () => {
    if (isFormValid()) {
      navigate('/Complete');
    } else {
      alert('Please fill in all the details before proceeding.');
    }
  };

  const handleBackClick = () => {
    navigate(-1); 
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Left Side - Image with Overlay Text */}
      <SignupImage />
      {/* Right Side - Form */}
      <div className="flex-1 p-8 flex flex-col justify-center bg-white relative">
        <h2 className="text-2xl font-mono mb-2">Step 3:</h2>
        <h1 className='text-2xl font-serif mb-8'>Tell us about your devices</h1>
        <h1 className='text-wrap font-serif mb-8'>
          When you participate in uTest projects, you need to have at least one device that you perform the test on.
          Please list a device (the more devices you have, the more invitations to projects you receive).
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row gap-4 mb-4">
            <div className="w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="computer">
                Your Computer*
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg border-b-4 text-gray-700 focus:outline-none focus:border-blue-500"
                type="text"
                id="computer"
                name="computer"
                value={formData.computer}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="version">
                Version*
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg border-b-4 text-gray-700 focus:outline-none focus:border-blue-500"
                type="text"
                id="version"
                name="version"
                value={formData.version}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="language">
                Language*
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg border-b-4 text-gray-700 focus:outline-none focus:border-blue-500"
                type="text"
                id="language"
                name="language"
                value={formData.language}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex flex-row gap-4 mb-4">
            <div className="w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="computer">
                Your Mobile*
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg border-b-4 text-gray-700 focus:outline-none focus:border-blue-500"
                type="text"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="version">
                Model*
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg border-b-4 text-gray-700 focus:outline-none focus:border-blue-500"
                type="text"
                id="model"
                name="model"
                value={formData.model}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="language">
                OS*
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg border-b-4 text-gray-700 focus:outline-none focus:border-blue-500"
                type="text"
                id="os"
                name="os"
                value={formData.os}
                onChange={handleChange}
                required
              />
            </div>
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
                type="submit" onClick={handleNextClick}
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

export default Devices;
