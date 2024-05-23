import React from 'react';

const SalesBanner = () => {
  return (
    <div className="flex justify-center items-center bg-yellow1 py-12 px-6">
      <div className="max-w-4xl w-full bg-goldenyellow flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            className="w-full h-full object-cover"
            src="girl4.png" 
            alt="Payday Sale"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-black mb-4">
            <span className="bg-white p-1">PAYDAY</span> SALE NOW
          </h1>
          <p className="text-gray-900 mb-4">
            Spend minimal $100 get 30% off voucher code for your next purchase
          </p>
          <p className="text-gray-900 mb-4">
            <strong>1 June - 10 June 2024</strong>
            <br />
            *Terms & Conditions apply
          </p>
          <button className="bg-black text-white h-50 w-40 py-2 px-4 rounded hover:bg-gray-800">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalesBanner;
