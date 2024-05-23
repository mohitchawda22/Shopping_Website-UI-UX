import React from 'react'

function AppDownload() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg">
          <div className="md:w-1/2 text-center md:text-left md:pr-8">
            <h1 className="text-3xl font-bold mb-4">DOWNLOAD APP & GET THE VOUCHER!</h1>
            <p className="mb-4">Get 30% off for first transaction using Rondovision mobile app for now.</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#">
                <img src="appstore.png" alt="Download on the App Store" className="h-12"/>
              </a>
              <a href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-12"/>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="app.png" alt="App Screenshot" className="max-w-80"/>
          </div>
        </div>
      </div>
    )
}

export default AppDownload
