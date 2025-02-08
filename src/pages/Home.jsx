import React from 'react'
import LandingNavBar from '../components/LandingNavBar'
import Footer from '../components/Footer.jsx'
export default function Home() {
  return (
    <div className="flex flex-col  gap-20">
      <LandingNavBar />
      <div className="hero">
      </div>
      <div className="hero flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100">
        <div className="hero-text flex flex-col items-start justify-center p-8 md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Get started</h1>
          <p className="text-lg mb-4">Find teammates and collab on new projects</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div className="hero-image md:w-1/2">
          <img src="../assets/images/desk.png" alt="Desk and man" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="header mb-8">
          <h1 className="text-3xl font-bold">Statistics</h1>
        </div>
        <div className="statistics grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="stats shadow p-4 rounded-lg bg-white">
            <div className="stat">
              <div className="stat-title text-lg font-semibold">Total Page Views</div>
              <div className="stat-value text-2xl font-bold">89,400</div>
              <div className="stat-desc text-gray-500">21% more than last month</div>
            </div>
          </div>
          <div className="stats shadow p-4 rounded-lg bg-white">
            <div className="stat">
              <div className="stat-title text-lg font-semibold">Total Page Views</div>
              <div className="stat-value text-2xl font-bold">89,400</div>
              <div className="stat-desc text-gray-500">21% more than last month</div>
            </div>
          </div>
        </div>
      </div>

      <div className="questions w-1/2">
        <h2 className=' my-9'>Commonly Asked Questions</h2>
        <div className="flex flex-col gap-2">
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative send-email bg-blue-900 text-white py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 p-8">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg mb-4">for any issue ,don’t hesitate to contact us
              here is our email.</p>
            <div className="flex gap-4">
              <input
                type="email"
                className="input input-bordered w-full p-2 rounded-l-lg"
                placeholder="Enter your email"
              />
              <button className="btn btn-primary rounded-r-lg">Subscribe</button>
            </div>
          </div>
          <div className="md:w-1/2 p-8 relative">
            <img src="../assets/images/desk.png" alt="Desk and man" className="w-full h-auto rounded-lg shadow-lg absolute top-0 left-0 transform -translate-y-1/2" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
