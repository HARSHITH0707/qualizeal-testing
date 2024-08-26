import React from 'react'

const SignupImage = () => {
  return (
    <div className="relative flex w-full md:w-1/3">
      <img
        src="/images/Designer.webp"
        alt="Sample"
        className="object-cover w-full h-64 md:h-full"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white p-4">
        <h2 className="text-3xl font-bold mb-2">Welcome to the world's largest community of testers.</h2>
        <p className="text-lg text-center">
          Work with some of the most influential brands on the planet and earn money while doing it.
        </p>
        <button className="bg-gradient-to-r from-red-400 to-red-600 py-4 px-10 shadow-lg hover:shadow-xl focus:shadow-xl focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-white rounded-3xl text-white my-3 transition-transform duration-300 transform hover:-translate-y-1 hover:scale-105">
          Sign In
        </button>

      </div>
    </div>

  )
}

export default SignupImage
