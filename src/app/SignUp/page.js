import React from 'react'

function Page() {
    return (
        <div className="flex flex-col lg:flex-row h-screen">
      {/* Left side with form */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 p-8 lg:p-16 bg-white">
        <div className="max-w-md mx-auto">
          <img src="Vector.png" alt="Logo" className="mb-6" /> {/* Replace with your logo */}
          <h1 className="text-3xl font-bold mb-2 text-black">Hello,</h1>
          <p className="text-gray-800 mb-8">let's get you started...</p>
          
          <form>
            <div className="flex space-x-4 mb-4">
              <input 
                type="text" 
                placeholder="First name" 
                className="w-1/2 p-3 border text-black bg-white border-gray-300 rounded"
              />
              <input 
                type="text" 
                placeholder="Last name" 
                className="w-1/2 p-3 border bg-white border-gray-300 rounded"
              />
            </div>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-3 mb-4 border bg-white border-gray-300 rounded"
            />
            <div className="relative">
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full p-3 mb-4 border bg-white border-gray-300 rounded"
              />
              <span className="absolute right-3 top-3 cursor-pointer">
                {/* Add an eye icon here for show/hide password functionality */}
              </span>
            </div>
            <button 
              type="submit" 
              className="w-full bg-yellow-400 text-white p-3 rounded hover:bg-yellow-500"
            >
              Create account
            </button>
          </form>
          <div className="text-center mt-4 text-gray-600">
            {/* or */}
          </div>
          {/* You can add additional signup options (e.g., Google, Facebook) here */}
        </div>
      </div>

      {/* Right side with image */}
      <div className="hidden lg:flex lg:w-1/2  justify-center items-center bg-orange1">
        <img src="signup.jpg" alt="Illustration" className="w-3/4" /> {/* Replace with your image */}
      </div>
    </div>
    )
}

export default Page
