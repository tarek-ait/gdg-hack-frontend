import { useAuthStore } from '../store/useAuthStore.js'; // Adjust the import path as necessary
import { Sun } from 'lucide-react'; // Adjust the import path as necessary
import { useLocation } from 'react-router-dom'; // Adjust the import path as necessary

const NavBar = () => {
  const { logout, isAuthentificated } = useAuthStore();
  const location = useLocation()

  const getPageName = (path) => {
    switch (path) {
      case '/':
        return 'Home'
      case '/finished-projects':
        return 'Finished Projects'
      case '/start-project':
        return 'Start a Project'
      case '/login':
        return 'Login'
      case '/signup':
        return 'Signup'
      case '/fields':
        return 'Fields'
      case '/projects':
        return 'Projects'
      case '/projects/:projectId/project-details':
        return 'Project Details'
      default:
        // Check for dynamic routes
        if (/^\/projects\/\d+\/project-details$/.test(path)) {
          return 'Project Details'
        }
        if (/^\/profile\/[^/]+$/.test(path)) {
          return 'Profile / User Details'
        }
        return 'Page'
    }
  }


  return (
    <div className="navbar flex items-center justify-center border-r border-gray-300  bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">{getPageName(location.pathname)}</a>
      </div>
      <div className="flex items-center gap-10">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        <div className="dropdown dropdown-end">
          <div className="container-3 flex items-center gap-4">
            <Sun />
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default NavBar