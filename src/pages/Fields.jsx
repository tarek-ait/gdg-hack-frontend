import React from 'react'
import fields from '../constants/fields.js'
import { MessageSquare, Loader } from 'lucide-react'
import { useAuthStore } from '../store/useAuthStore.js'
import { useEffect } from 'react'

export default function Fields() {
  const { setFieldsOfInterest, isUpdatingProfile } = useAuthStore()
  // eterate through the different fields, and each time a field is selected we push it to the desired fields and when the user hits the button we updaate the profile
  const [formData, setFormData] = React.useState({
    fields: [],
  })


  const handleFieldClick = (field) => {
    setFormData((prevFormData) => {
      const isSelected = prevFormData.fields.includes(field)
      if (isSelected) {
        return {
          ...prevFormData,
          fields: prevFormData.fields.filter((f) => f !== field),
        }
      } else {
        return {
          ...prevFormData,
          fields: [...prevFormData.fields, field],
        }
      }
    })
  }

  useEffect(() => {
    console.log(formData.fields)
  }, [formData.fields])

  const handleSubmit = (e) => {
    e.preventDefault()
    setFieldsOfInterest(formData)
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
            <div className="form-cotrol flex flex-col gap-5">
              <p>Enter the fields you are interested in</p>
              <div className="flex flex-wrap gap-2 w-full">
                {fields.map((field) => (
                  <div
                    key={field}
                    className={`px-4 py-2 rounded-full cursor-pointer ${formData.fields.includes(field)
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 text-gray-800'
                      }`}
                    onClick={() => handleFieldClick(field)}
                  >
                    {field}
                  </div>
                ))}
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full" disabled={isUpdatingProfile}>
              {isUpdatingProfile ? (
                <>
                  <Loader className="size-5 animate-spin"> </Loader>
                </>
              ) : (
                "Done"
              )}
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}
