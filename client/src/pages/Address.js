import React, { useState } from 'react';
import SignupImage from '../components/SignupImage';
import { useNavigate } from 'react-router-dom';


// Example list of countries; you might want to use a more comprehensive list
const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
  "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Congo (DRC)",
  "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland",
  "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
  "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
  "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (North)",
  "Korea (South)", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
  "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
  "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
  "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia",
  "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
  "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
  "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
  "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname",
  "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga",
  "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
  "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];


const Address = () => {
  const [formData, setFormData] = useState({
    city: '',
    zip: '',
    country: '',
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
    return formData.city && formData.zip && formData.country ;
  };

  const handleNextClick = () => {
    if (isFormValid()) {
      navigate('/Devices');
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
        <h2 className="text-2xl font-mono mb-2">Step 2:</h2>
        <h1 className='text-2xl font-serif mb-8'>Add Your Address</h1>
        <h1 className='text-wrap font-serif mb-8'>
          By telling us where you live, you enable our customers to truly test their products and
          software throughout the globe - in the hands of real people like you. All fields required.
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="w-full md:w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                City*
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg border-b-4 text-gray-700 focus:outline-none focus:border-blue-500"
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zip">
                Zip or postal code*
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg border-b-4 text-gray-700 focus:outline-none focus:border-blue-500"
                type="number"
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
              Country*
            </label>
            <select
              className="w-full px-3 py-2 border rounded-lg border-b-4 text-gray-700 focus:outline-none focus:border-blue-500"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select a country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
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

export default Address;