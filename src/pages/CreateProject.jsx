import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import { ArrowLeft, Bell, Sun } from 'lucide-react'
import projects from '../constants/projects'

export default function AddProject() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [requirements, setRequirements] = useState('')
  const [resources, setResources] = useState('')
  const [status, setStatus] = useState('Open')
  const [isPublic, setIsPublic] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newProject = {
      id: (projects.length + 1).toString(),
      title,
      description,
      category,
      requirements: requirements.split(',').map(req => req.trim()),
      resources: resources.split(',').map(res => res.trim()),
      status,
      public: isPublic,
      submittedAt: new Date(),
    }
    projects.push(newProject)
    history.push('/projects')
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
                  <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Add Project</h2>
                  <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>
                    Fill in the details below to create a new project.
                  </p>

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
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
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
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
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        style={{ width: "100%", padding: "0.5rem", border: "1px solid #d1d5db", borderRadius: "0.375rem" }}
                      />
                    </div>

                    <div>
                      <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>Requirements</h3>
                      <textarea
                        value={requirements}
                        onChange={(e) => setRequirements(e.target.value)}
                        placeholder="Separate requirements with commas"
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
                        value={resources}
                        onChange={(e) => setResources(e.target.value)}
                        placeholder="Separate resources with commas"
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
                      <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>Status</h3>
                      <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        style={{ width: "100%", padding: "0.5rem", border: "1px solid #d1d5db", borderRadius: "0.375rem" }}
                      >
                        <option value="Open">Open</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </div>

                    <div>
                      <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>Make Public</h3>
                      <input
                        type="checkbox"
                        checked={isPublic}
                        onChange={(e) => setIsPublic(e.target.checked)}
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

                    <div style={{ marginTop: "2rem", display: "flex", justifyContent: "flex-end" }}>
                      <button
                        type="submit"
                        style={{
                          backgroundColor: "#2563eb",
                          color: "white",
                          padding: "0.5rem 1rem",
                          borderRadius: "0.375rem",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        Create Project
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}