import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import projects from '../constants/projects'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export default function Projects() {

    const [statusFilter, setStatusFilter] = useState('All')
    const [categoryFilter, setCategoryFilter] = useState('All')

    const filteredProjects = projects.filter((project) => {
      const statusMatch = statusFilter === 'All' || project.status === statusFilter
      const categoryMatch = categoryFilter === 'All' || project.type === categoryFilter
      return statusMatch && categoryMatch
    })
    // to locale date to string 
    return (
      <div className="flex max-h-screen overflow-y-hidden">
        {/* Sidebar with border */}
        <SideBar className="border-r border-gray-300" />
        <div className="flex-1 flex flex-col bg-gray-100">
          {/* Fixed navbar */}
          <NavBar className="fixed w-full z-10 border-b border-gray-300 bg-white" />
          <div className="mt-16 p-4 overflow-y-auto flex-1 h-screen">
            {/* Add your projects content here */}
            {/* <h1 className="text-2xl font-bold">Projects</h1> */}
            {/* the filters */}
            <div className="container-4">
              {/* the filters */}
              <div className="flex justify-between">
                <div>
                  <label className="mr-2">Status:</label>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="select select-bordered"
                  >
                    <option value="All">All</option>
                    <option value="Open">Open</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                <div>
                  <label className="mr-2">Category:</label>
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="select select-bordered"
                  >
                    <option value="All">All</option>
                    <option value="AI">AI</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile Development">Mobile Development</option>
                    {/* Add more categories as needed */}
                  </select>
                </div>
              </div>
              <div className="overflow-x-auto my-10">
                <table className="table w-full">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Status</th>
                      <th>Type</th>
                      <th>Submitted At</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project, index) => (
                      <React.Fragment key={index}>
                        <tr>
                          <td>{project.title}</td>
                          <td>{project.status}</td>
                          <td>{project.type}</td>
                          <td>{project.submittedAt}</td>
                          <td>
                            <Link to={`/projects/${index}`} className="btn btn-ghost btn-xs">details</Link>
                          </td>
                        </tr>
                        {index < projects.length - 1 && (
                          <tr>
                            <td colSpan="5">
                              <hr className="border-t border-gray-300" />
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
                    
          </div>
        </div>
      </div>
    )
  }
