import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function SideBar() {
  return (
    <div className="h-screen p-10 w-70 bg-light my-50 border-r border-gray-300 text-gray-800 flex flex-col">
      <div className="p-4 text-2xl font-bold">
        Projects Hub
      </div>
      <nav className="flex flex-col p-4 space-y-4">
        <div className="flex justify-between">
          <Link to="/projects" className=" p-2 rounded">
            Projects
          </Link>
          <ChevronRight  className='size-4' />
        </div>
        <div className="flex justify-between  items-center ">
          <Link to="/start-project" className=" p-2 rounded">
            Start a Project
          </Link>
          <ChevronRight className='size-4' />
        </div>
        <div className="flex justify-between items-center ">
          <Link to="/finished-projects" className=" p-2 rounded">
            Finished Projects
          </Link>
          <ChevronRight className='size-4' />
        </div>

        <div className="flex justify-between items-center ">
          <Link to="/profile" className=" p-2 rounded">
            Profile
          </Link>
          <ChevronRight className='size-4' />
        </div>

      </nav>
    </div>
  )
}
