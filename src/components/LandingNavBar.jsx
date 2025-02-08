
import React from 'react'
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

export default function LandingNavBar() {
    const { isAuthenticated, logout} = useAuthStore()

    // call the logout function
    const handleClick = () => {
        logout()
    }
    return (
        <div className="navbar bg-base-100  border border-gray-300 rounded-lg fixed w-full top-0 z-40 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a href='#hero'>Home</a></li>
                        <li>
                            <a href='#stat'>Statistics</a>
                        </li>
                        <li>
                            <a href='#features'>Features</a>
                        </li>
                        <li>
                            <a href='#feedbakcs'>Feedback</a>
                        </li>
                        <li>
                            <a href='#questions'>Q&A</a>
                        </li>
                        <li>
                            <a href='#contact'>Contact Us</a>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Projects Hub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href='#hero'>Home</a></li>
                    <li>
                        <a href='#stats'>Statistics</a>
                    </li>
                    <li>
                        <a href='#features'>features</a>
                    </li>
                    <li>
                        <a href='#feedbacks'>Feedback</a>
                    </li>
                    <li>
                        <a href='#questions'>Q&A</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {isAuthenticated && (
                    <div className="cont flex  gap-3">
                        <Link to={"/projects"} className="btn">Projects</Link>
                        <button onClick={handleClick()} className="btn">LogOut</button>
                    </div>

                )}
                { !isAuthenticated && (
                    <Link to={"/login"} className="btn">Login</Link>
                )}
            </div>
        </div>
    )
}
