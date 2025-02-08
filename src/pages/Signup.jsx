import React from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, Loader, Lock, Mail, MessageSquare, User } from 'lucide-react'
import { useAuthStore } from '../store/useAuthStore'

export default function Signup() {
  const { isSigningUp, signup } = useAuthStore()
  const [formData, setFormData] = React.useState({
    userName: "",
    lastName: "",
    firstName: "",
    email: "",
    password: ""
  })
  const [showPassword, setShowPassword] = React.useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(formData)
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-1">
      <div className="flex flex-col justify-center items-center p-6">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                <MessageSquare className="size-6 text-primary">
                </MessageSquare>
              </div>
            </div>
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-cotrol">
              <label className="label">
                <span className="label-text font-medium">User Name</span>
              </label>
              <div className="relative flex gap-2">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User className="size-5 text-base-content/40"></User>
                </div>
                <input type="text"
                  className={`input input-bordered -5 w-full pl-12 ${formData.userName.length > 0 ? 'input-success' : ''}`}
                  placeholder="Mar!"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                />
              </div>
            </div>
            <div className="form-cotrol ">
              <div className="form-cont flex gap-4">
                <div className="container-1 flex-col flex">
                  <label className="label">
                    <span className="label-text font-medium">First Name</span>
                  </label>
                  <div className="relative flex gap-2">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <User className="size-5 text-base-content/40"></User>
                    </div>
                    <input type="text"
                      className={`input input-bordered -5 w-full pl-12 ${formData.firstName.length > 0 ? 'input-success' : ''}`}
                      placeholder="Mar!"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                </div>
                <div className="container-1 flex-col flex">
                  <label className="label">
                    <span className="label-text font-medium">Last Name</span>
                  </label>
                  <div className="relative flex gap-2">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <User className="size-5 text-base-content/40"></User>
                    </div>
                    <input type="text"
                      className={`input input-bordered -5 w-full pl-12 ${formData.lastName.length > 0 ? 'input-success' : ''}`}
                      placeholder="Mar!"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                </div>
              </div>

            </div>

            <div className="form-cotrol">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="size-5 text-base-content/40"></Mail>
                </div>
                <input type="email"
                  className={`input input-bordered w-full pl-12 ${formData.email.length > 0 ? 'input-success' : ''}`}
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <div className="form-cotrol">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="size-5 text-base-content/40"></Lock>
                </div>
                <input type={showPassword ? "text" : "password"}
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
                  {showPassword ? <EyeOff className="size-5 text-base-content/40"></EyeOff> : <Eye className="size-5 text-base-content/40"></Eye>}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full" disabled={isSigningUp}>
              {isSigningUp ? (
                <>
                  <Loader className="size-5 animate-spin"> </Loader>
                </>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/50">
              Already have an account?&nbsp;&nbsp;{""}
              <Link to="/login" className="link link-primary">
                Sign In
              </Link>
            </p>
          </div>
          <Link to="/fields" className="link link-primary">
                Fields
              </Link>
        </div>
      </div>

    </div>
  )
}
