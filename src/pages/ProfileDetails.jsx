import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import { useState } from 'react'
import './app.css'

export default function ProfileDetails() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    portfolio: "",
    school: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const togglePasswordVisibility = (field) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to a server
  }

  return (
    <div className="flex max-h-screen overflow-y-hidden">
      {/* Sidebar with border */}
      <SideBar className="border-r border-gray-300" />
      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Fixed navbar */}
        <NavBar className="fixed w-full z-10 border-b border-gray-300 bg-white" />
        <div className="mt-16 p-4 overflow-y-auto flex-1 h-screen">
          {/* Add your projects content here */}
          <h1 className="text-2xl font-bold">Profile</h1>
          <div className="user-profile">
            <h1>User Profile</h1>

            <div className="profile-header">
              <div className="avatar-container">
                <img src="/placeholder.svg" alt="User Avatar" className="avatar" />
                <div className="user-info">
                  <h2>Abdellah Zeghmar</h2>
                  <p>Student</p>
                  <p>Est</p>
                </div>
              </div>
              <div className="avatar-actions">
                <button className="btn btn-primary">Upload New Photo</button>
                <button className="btn btn-secondary">Delete</button>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Max"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="eg. Mohamed"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="userName">User Name</label>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  value={formData.userName}
                  onChange={handleInputChange}
                  placeholder="eg. alaa.mohamed"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
                </div>
              </div>

              <div className="projects-section">
                <h3>See more</h3>
                <div className="project-list">
                  {["Project 1", "Project 2", "Project 3"].map((project, index) => (
                    <div key={index} className="project-item">
                      <span className="project-icon">{index + 1}</span>
                      <span>{project}</span>
                    </div>
                  ))}
                </div>
                <button className="btn btn-link">View All</button>
              </div>

              <div className="socials-section">
                <h3>Socials</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="github">GitHub</label>
                    <input type="text" id="github" name="github" value={formData.github} onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="linkedin">LinkedIn</label>
                    <input type="text" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="portfolio">Portfolio link</label>
                    <input
                      type="text"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="school">School</label>
                <input type="text" id="school" name="school" value={formData.school} onChange={handleInputChange} />
              </div>

              <div className="password-section">
                <div className="form-group">
                  <label htmlFor="currentPassword">Current Password</label>
                  <div className="password-input">
                    <input
                      type={showPassword.current ? "text" : "password"}
                      id="currentPassword"
                      name="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleInputChange}
                    />
                    <button type="button" onClick={() => togglePasswordVisibility("current")}>
                      {showPassword.current ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="newPassword">New Password</label>
                  <div className="password-input">
                    <input
                      type={showPassword.new ? "text" : "password"}
                      id="newPassword"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleInputChange}
                    />
                    <button type="button" onClick={() => togglePasswordVisibility("new")}>
                      {showPassword.new ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm New Password</label>
                  <div className="password-input">
                    <input
                      type={showPassword.confirm ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                    />
                    <button type="button" onClick={() => togglePasswordVisibility("confirm")}>
                      {showPassword.confirm ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="btn btn-secondary">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
