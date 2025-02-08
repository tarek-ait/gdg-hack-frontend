import React from 'react'
import LandingNavBar from '../components/LandingNavBar'
import Footer from '../components/Footer.jsx'
import Desk from '../assets/images/desk.png'
import woman from '../assets/images/woman.png'
import email from '../assets/images/email.png'
import { Link } from 'react-router-dom'
import F1 from '../assets/images/feature1.png'
import F2 from '../assets/images/feature2.png'
import F3 from '../assets/images/feature3.png'
import Feed1 from '../assets/images/feed1.png'
import Feed2 from '../assets/images/feed2.png'

export default function Home() {
  return (
    <div className="flex flex-col  gap-20">
      <LandingNavBar />
      <div id='hero' className="hero flex justify-between min-h-screen w-full bg-gray-100 px-20" style={{ display: 'flex' }}>
        <div className="hero-text flex gap-10 flex-col items-start justify-center p-8" style={{ order: 1 }}>
          <p className="text-4xl font-bold mb-4">Get started</p>
          <p className="text-4xl font-bold mb-4 ">Find teammates and collab on new projects</p>
          <Link className="btn btn-primary" to={'/login'}>Get Started</Link>
        </div>
        <div className="hero-image" style={{ order: 2 }}>
          <img src={Desk} alt="Desk and man" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>




      <div id='stats' className="flex flex-col items-center justify-center">
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


      <div id='features' className="features bg-gray-100 flex justify-between items-center p-20">
        <div className="left flex gap-10 flex-col items-start justify-center w-1/2">
          <p className='text-4xl font-bold'>what’s special about our app</p>
          <p>Have a brilliant project idea but need the right people to bring it to life? ProjectsHub connects students
            and professionals who want to collaborate, innovate, and create impressive projects all while
            keeping your ideas secure.
          </p>
        </div>
        <div className="right flex gap-5">
          <div className="feature my-10">
            <img src={F1} alt="feature" />
          </div>
          <div className="feature flex flex-col gap-3">
            <img src={F3} alt="feature" />
            <img src={F2} alt="feature" />
          </div>
        </div>
      </div>


      <div id='feedbacks' className="feedbacks flex justify-between items-center p-20 flex-col">
        <div className="containers flex flex-col items-center gap-3 justify-center">
          <p className='text-4xl font-bold'>Check What Our users </p>
          <p className='text-4xl font-bold'>Think About Us</p>
        </div>
        <div className="carousel w-full my-10">
          <div id="slide1" className="carousel-item items-center flex justify-center relative w-full">
            <div className="covn flex gap-5 items-center justify-center">
              <div className="con flex flex-col items-center justify-center">
                <img
                  src={Feed1}
                />
              </div>
              <div className="con flex items-center justify-center h-full">
                <img src={Feed2} className="mx-auto" />
              </div>
            </div>


            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>

          <div id="slide2" className="carousel-item items-center flex justify-center relative w-full">
            <div className="con flex gap-5 items-center justify-center">
              <div className="con flex items-center justify-center h-full">
                <img src={Feed2} className="mx-auto" />
              </div>
              <div className="con flex flex-col items-center justify-center">
                <img
                  src={Feed1}
                />
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>

        </div>
      </div>





      <div id='questions' className="questions w-1/2 flex gap-10 flex-col justify-between items-center p-20">
        <p className='text-4xl font-bold my-10'>Commonly Asked Questions</p>
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

      <div id='contact' className="w-screen min-h-[80vh] flex flex-col items-center">

        <div className="w-full flex justify-end p-4">
          <img src={woman} alt="Woman" className="max-w-full h-auto" />
        </div>


        <div className="flex-grow flex justify-center items-center">
          <div className="w-[80vw] h-[20vw] bg-black rounded-2xl flex flex-col justify-center items-center text-white text-center p-6 relative">
            <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
            <p className="text-lg">For any issue, don't hesitate to contact us.</p>


            <div className="mt-2 text-lg">Here is our email:</div>
            <div className="text-lg font-semibold flex items-center gap-2">
              <img src={email} alt="Email Icon" className="absolute left-[20%] top-1/2 transform -translate-y-1/2 w-[26%] h-30" />
              <a href="mailto:support@example.com" className="underline">support@example.com</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
