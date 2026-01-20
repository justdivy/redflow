import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-100 to-pink-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-semibold text-xl text-red-600">
            Red-flow
          </div>
          <div className="space-x-4">
            <a href="#about" className="hover:text-red-500">About</a>
            <a href="#features" className="hover:text-red-500">Features</a>
            <a href="#contact" className="hover:text-red-500">Contact</a>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
              Sign Up
            </button>
            <button className="border border-red-500 hover:bg-red-50 text-red-500 px-4 py-2 rounded">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-red-700 mb-4">
          Give the Gift of Life
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Connect with donors and save lives with our blood donation and management system.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg">
            Find a Donor
          </button>
          <button className="border border-red-600 hover:bg-red-50 text-red-600 px-8 py-3 rounded-full text-lg">
            Become a Donor
          </button>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold text-red-600 mb-8 text-center">
          About BloodConnect
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 leading-relaxed">
              BloodConnect is a college project dedicated to simplifying blood donation and management. We aim to bridge the gap between those in need and willing donors, ensuring timely and efficient blood supply. Our system provides a platform for hospitals, donors, and recipients to connect seamlessly.
            </p>
            <ul className="list-disc list-inside mt-4">
              <li>Efficient donor management</li>
              <li>Real-time blood availability tracking</li>
              <li>Secure and confidential data handling</li>
              <li>Easy access for hospitals and individuals</li>
            </ul>
          </div>
          <div className="flex justify-center items-center px-2">
            <img
              src="https://media.istockphoto.com/id/1445531404/photo/world-blood-donation-donor-day-and-save-life.jpg?s=612x612&w=0&k=20&c=BWWNmtNDQgd4kYClYJAEf9sH3W5gxeC46zUz0c9vfpg="
              alt="Blood Donation"
              className="rounded-lg shadow-md w-100  border-1 border-black-500"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-red-600 mb-8 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-red-500 mb-2">
                Donor Registration
              </h3>
              <p className="text-gray-700">
                Easily register as a blood donor and manage your profile.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-red-500 mb-2">
                Blood Request
              </h3>
              <p className="text-gray-700">
                Hospitals and individuals can request blood based on their needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-red-500 mb-2">
                Real-Time Tracking
              </h3>
              <p className="text-gray-700">
                Track blood availability and donor status in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold text-red-600 mb-8 text-center">
          Contact Us
        </h2>
        <div className="text-center">
          <p className="text-gray-700">
            For any inquiries, please contact us at:
          </p>
          <p className="text-red-500 mt-2">
            bloodconnect@example.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 py-4 text-center">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} BloodConnect. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;