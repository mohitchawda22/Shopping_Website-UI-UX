import React from 'react'

function Contact() {
    return (
        // <div className="flex justify-center items-center bg-goldenyellow py-12 px-6">
        // <p className="text-white font-bold text-2xl mb-4">
        //     JOIN SHOPPING COMMUNITY TO <span>GET MONTHLY PROMO</span>
        // </p>
        // <p className='text-center text-white'>Type your email down below and be young wild generation</p>
        // </div>

        <div className="flex justify-center items-center bg-yellow-400 py-12 px-6">
      <div className="text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
        </h2>
        {/* Subheading */}
        <p className="text-white mb-6">
          Type your email down below and be young wild generation
        </p>
        {/* Form */}
        <div className="flex justify-center items-center space-x-2">
          <input
            type="email"
            placeholder="Add your email here"
            className="p-3 w-60 rounded-lg focus:outline-none bg-white"
          />
          <button className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800">
            SEND
          </button>
        </div>
      </div>
    </div>
    )
}

export default Contact
