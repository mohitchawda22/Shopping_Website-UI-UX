'use client'

import React from "react";

function NewArrival() {
  return (
//     <div className="card w-96 glass m-5">
//       <figure>
//         <img
//           src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
//           alt="car!"
//         />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">Life hack</h2>
//         <p>How to park your car at your garage?</p>
//         <div className="card-actions justify-end">
//           <button className="btn btn-primary">Learn now!</button>
//         </div>
//       </div>
//     </div>
//   );
    <div className="text-center py-12 bg-white">
      {/* Header */}
      <h2 className="text-3xl font-bold mb-2 text-black">
        NEW ARRIVALS
        <span className="block bg-yellow-300 h-1 w-16 mx-auto mt-2"></span>
      </h2>

      {/* Card Container */}
      <div className="flex justify-center space-x-8 mt-8">
        {/* Card 1 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="/girl1.png"
            alt="Hoodies & Sweatshirt"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black text-left">Hoodies & Sweatshirt</div>
            <p className="text-gray-700 text-base text-left">Explore Now!</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="text-gray-700 text-base font-bold">
              Check Now! →
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="/girl2.png"
            alt="Coats & Parkas"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black text-left">Coats & Parkas</div>
            <p className="text-gray-700 text-base text-left">Explore Now!</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="text-gray-700 text-base font-bold">
              Check Now! →
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="girl3.png"
            alt="Tees & T-Shirt"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black text-left">Tees & T-Shirt</div>
            <p className="text-gray-700 text-base text-left">Explore Now!</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="text-gray-700 text-base font-bold" onClick={()=>{}}>
              Check Now! →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default NewArrival;
