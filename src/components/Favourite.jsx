import React from 'react'

function Favourite() {
    return (
        <div className="p-20 bg-white">
        <h1 className="text-3xl font-bold mb-8 text-black">
          Young’s Favourite
          {/* <span className="flex justify-end bg-yellow-300 h-1 w-16 mx-auto mt-2"></span> */}
        </h1>
        <div className="flex justify-between gap-4">
          <div className="w-1/2 bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <img src="girl5.png" alt="Trending on Instagram" className="w-full" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-black">Trending on Instagram</h2>
              <a href="favourite" className="text-grey-800 hover:underline">Explore Now!</a>
            </div>
          </div>
          <div className="w-1/2 bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <img src="girl6.png" alt="All Under $40" className="w-full" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-black">All Under $40</h2>
              <a href="favourite" className="text-grey-800 hover:underline">Explore Now!</a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Favourite
