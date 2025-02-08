import React from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import { Loader } from 'lucide-react'
import { useAuthStore } from '../store/useAuthStore.js';


export default function Login() {
  const {isLoggingIn, login } = useAuthStore() ; 
  const [formData, setFormData] = React.useState({
    email: "",
    password: ""
  })
  const [showPassword, setShowPassword] = React.useState(false)
  const [isLoginIn, setIsLoginIn] = React.useState(false
  )
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoginIn(true)
    await login(formData)
    setIsLoginIn(false)
  }
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
    {/* Left side */}
    <div className="flex flex-col justify-center items-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex flex-col items-center gap-2 group">
            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
              {/* Add your logo here */}
            </div>
          </div>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail className="w-5 h-5 text-base-content/40" />
              </div>
              <input
                type="email"
                className={`input input-bordered w-full pl-10 ${formData.email.length > 0 ? 'input-success' : ''}`}
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock className="w-5 h-5 text-base-content/40" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                className={`input input-bordered w-full pl-10`}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-5 h-5 text-base-content/40" /> : <Eye className="w-5 h-5 text-base-content/40" />}
              </button>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-full" disabled={isLoginIn}>
            {isLoginIn ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                loading...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <div className="text-center">
          <p className="text-base-content/50">
            You don&apos;t have an account?, try to create one&nbsp;&nbsp;{""}
            <Link to="/signup" className="link link-primary">
              Signup</Link>
          </p>
        </div>
      </div>
    </div>
    {/* Right side */}
    <div className="hidden lg:flex items-center justify-center bg-primary">
    </div>
  </div>
  )
}
