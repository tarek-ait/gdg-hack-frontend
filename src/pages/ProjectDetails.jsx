import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import { useParams } from 'react-router-dom'
import { ArrowLeft, Bell, Sun } from 'lucide-react'
import projects from '../constants/projects'

export default function ProjectDetails() {
  // get the id of the project from the url, and search for it in the projects table  
  const { id } = useParams()
  console.log(id)
  const project = projects.find((project) => project.id === id)
  console.log(project)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="flex max-h-screen overflow-y-hidden">
      {/* Sidebar with border */}
      <SideBar className="border-r border-gray-300" />
      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Fixed navbar */}
        <NavBar className="fixed w-full z-10 border-b border-gray-300 bg-white" />
        <div className="mt-16 p-4 overflow-y-auto flex-1 h-screen">

            {/* Main content */}
            <div style={{ flex: 1, overflow: "auto" }}>

              <main style={{ maxWidth: "80rem", margin: "0 auto", padding: "1.5rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                  {/* Project Details Form */}
                  <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Project Details</h2>
                    <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>
                      Welcome to the project details page. Here you can view all the details of the project and send a request to join the project.
                    </p>

                    <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                      <div>
                        <label
                          htmlFor="title"
                          style={{
                            display: "block",
                            fontSize: "0.875rem",
                            fontWeight: "500",
                            color: "#374151",
                            marginBottom: "0.5rem",
                          }}
                        >
                          Title
                        </label>
                        <input
                          id="title"
                          value={project.title}
                          disabled
                          style={{ width: "100%", padding: "0.5rem", border: "1px solid #d1d5db", borderRadius: "0.375rem" }}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="description"
                          style={{
                            display: "block",
                            fontSize: "0.875rem",
                            fontWeight: "500",
                            color: "#374151",
                            marginBottom: "0.5rem",
                          }}
                        >
                          Description
                        </label>
                        <textarea
                          id="description"
                          value={project.description}
                          disabled
                          style={{
                            width: "100%",
                            padding: "0.5rem",
                            border: "1px solid #d1d5db",
                            borderRadius: "0.375rem",
                            minHeight: "100px",
                          }}
                        />
                      </div>

                      <div>
                        <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>Project Category</h3>
                        <label
                          htmlFor="category"
                          style={{
                            display: "block",
                            fontSize: "0.875rem",
                            fontWeight: "500",
                            color: "#374151",
                            marginBottom: "0.5rem",
                          }}
                        >
                          Category
                        </label>
                        <input
                          id="category"
                          value={project.category}
                          disabled
                          style={{ width: "100%", padding: "0.5rem", border: "1px solid #d1d5db", borderRadius: "0.375rem" }}
                        />
                      </div>

                      <div>
                        <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>Requirements</h3>
                        <textarea
                          value={project.requirements.join(', ')}
                          disabled
                          style={{
                            width: "100%",
                            padding: "0.5rem",
                            border: "1px solid #d1d5db",
                            borderRadius: "0.375rem",
                            minHeight: "100px",
                          }}
                        />
                      </div>

                      <div>
                        <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>Resources (optional)</h3>
                        <textarea
                          value={project.resources.join(', ')}
                          disabled
                          style={{
                            width: "100%",
                            padding: "0.5rem",
                            border: "1px solid #d1d5db",
                            borderRadius: "0.375rem",
                            minHeight: "100px",
                          }}
                        />
                      </div>
                    </form>
                  </div>

                  {/* Product Status */}
                  <div style={{ width: "100%", maxWidth: "400px" }}>
                    <div
                      style={{
                        backgroundColor: "white",
                        padding: "1.5rem",
                        borderRadius: "0.5rem",
                        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                      }}
                    >
                      <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "1rem" }}>Product Status</h3>
                      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <div>
                          <label
                            htmlFor="status"
                            style={{
                              display: "block",
                              fontSize: "0.875rem",
                              fontWeight: "500",
                              color: "#374151",
                              marginBottom: "0.5rem",
                            }}
                          >
                            Status
                          </label>
                          <input
                            id="status"
                            value={project.status}
                            disabled
                            style={{
                              width: "100%",
                              padding: "0.5rem",
                              border: "1px solid #d1d5db",
                              borderRadius: "0.375rem",
                            }}
                          />
                        </div>

                        <div className='flex'>
                          <p style={{ fontSize: "0.75rem", color: "#6b7280", marginBottom: "0.5rem" }}>
                            All users  have access to all detailed information
                          </p>
                          <input
                            type="checkbox"
                            checked={project.public}
                            disabled
                            style={{
                              width: "100%",
                              padding: "0.5rem",
                              border: "1px solid #d1d5db",
                              borderRadius: "0.375rem",
                              backgroundColor: "white",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: "2rem", display: "flex", justifyContent: "flex-end" }}>
                  <button
                    style={{
                      backgroundColor: "#2563eb",
                      color: "white",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.375rem",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Send Request
                  </button>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
  )
}
