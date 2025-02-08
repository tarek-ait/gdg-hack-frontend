import './App.css'
import { useEffect } from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import { useAuthStore } from './store/useAuthStore'
import { Loader } from 'lucide-react'
import { Toaster } from 'react-hot-toast'
import Login from '../src/pages/Login.jsx'
import Signup from '../src/pages/Signup.jsx'
import Home from './pages/Home.jsx'
import Fields from './pages/Fields.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetails from './pages/ProjectDetails.jsx'
import ProfileDetails from './pages/ProfileDetails.jsx'
import CreateProject from './pages/CreateProject.jsx'
import FinishedProjects from './pages/FinishedProjects.jsx'

const App = () => {
  const { isAuthenticated, isCheckingAuth, checkAuth } = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  // protect the routes 

  console.log(isAuthenticated)

  if (isCheckingAuth) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    )
  }

  return (
    <div className="flex flex-col overflow">
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/login" element={!isAuthenticated ?  <Login /> :   <Navigate to="/projects" />} />
        <Route path="/signup" element={!isAuthenticated ?  <Signup/> :   <Navigate to="/projects" />} />
        <Route path="/fields" element={!isAuthenticated ?  <Fields/> :   <Navigate to="/projects" />} />
        <Route path="/projects" element={isAuthenticated ?  <Projects/> :   <Navigate to="/login" />} />
        <Route path="/projects/:projectId" element={isAuthenticated ?  <ProjectDetails/> :   <Navigate to="/login" />} />
        <Route path="/profile/" element={isAuthenticated ?  <ProfileDetails/> :   <Navigate to="/login" />} />
        <Route path="/start-project" element={isAuthenticated ?  <CreateProject/> :   <Navigate to="/login" />} />
        <Route path="/finished-projects" element={isAuthenticated ?  <FinishedProjects/> :   <Navigate to="/login" />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App