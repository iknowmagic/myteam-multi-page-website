import React, { useState, FormEvent } from 'react'

/**
 * Contact page with form validation
 */
export default function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    title: '',
    message: '',
  })

  // Error state
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  // Basic validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Required fields
    if (!formData.name.trim()) newErrors.name = 'This field is required'
    if (!formData.company.trim()) newErrors.company = 'This field is required'
    if (!formData.title.trim()) newErrors.title = 'This field is required'
    if (!formData.message.trim()) newErrors.message = 'This field is required'

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'This field is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // In a real app, you would send this data to your backend
      alert('Form is valid and ready to be submitted')
      console.log('Form data:', formData)
    }
  }

  return (
    <div className="overflow-hidden text-white">
      {/* Contact Section */}
      <section className="relative lg:flex lg:justify-between lg:items-start px-6 md:px-24 pb-24 md:pb-24 lg:pb-24">
        {/* Background patterns */}
        <div className="hidden md:block top-0 -left-24 absolute bg-[url('/assets/images/bg-pattern-about-2-contact-1.svg')] bg-no-repeat w-52 h-52" />
        <div className="-right-24 -bottom-24 absolute bg-[url('/assets/images/bg-pattern-contact-2.svg')] bg-no-repeat w-52 h-52" />

        {/* Contact Information */}
        <div className="lg:pt-5 md:pl-6 lg:w-1/2">
          {/* Page title */}
          <h1 className="font-bold text-4xl lg:text-6xl lg:text-left text-center">
            Contact
            <span className="block mt-4 font-bold text-3xl">Ask us about</span>
          </h1>

          {/* Contact topics */}
          <div className="space-y-6 mt-10 md:mt-6 lg:mt-8 mb-8 md:mb-10">
            {/* Topic 1 */}
            <div className="flex items-center">
              <div className="bg-[url('/assets/images/icon-person.svg')] bg-no-repeat bg-left w-20 h-20" />
              <div className="font-bold text-lg">
                The quality of our talent network
              </div>
            </div>

            {/* Topic 2 */}
            <div className="flex items-center">
              <div className="bg-[url('/assets/images/icon-cog.svg')] bg-no-repeat bg-left w-20 h-20" />
              <div className="font-bold text-lg">
                Usage & implementation of our software
              </div>
            </div>

            {/* Topic 3 */}
            <div className="flex items-center">
              <div className="bg-[url('/assets/images/icon-chart.svg')] bg-no-repeat bg-left w-20 h-20" />
              <div className="font-bold text-lg">
                How we help drive innovation
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col pt-6 lg:w-1/2" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-7">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full pb-4 pl-4 bg-transparent border-b ${
                errors.name ? 'border-[#f67e7e]' : 'border-white/80'
              } outline-none transition-all placeholder:text-white/60 focus:border-[#79c8c7]`}
            />
            {errors.name && (
              <p className="mt-2 pl-4 font-bold text-[#f67e7e] text-xs italic">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-7">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className={`w-full pb-4 pl-4 bg-transparent border-b ${
                errors.email ? 'border-[#f67e7e]' : 'border-white/80'
              } outline-none transition-all placeholder:text-white/60 focus:border-[#79c8c7]`}
            />
            {errors.email && (
              <p className="mt-2 pl-4 font-bold text-[#f67e7e] text-xs italic">
                {errors.email}
              </p>
            )}
          </div>

          {/* Company Field */}
          <div className="mb-7">
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className={`w-full pb-4 pl-4 bg-transparent border-b ${
                errors.company ? 'border-[#f67e7e]' : 'border-white/80'
              } outline-none transition-all placeholder:text-white/60 focus:border-[#79c8c7]`}
            />
            {errors.company && (
              <p className="mt-2 pl-4 font-bold text-[#f67e7e] text-xs italic">
                {errors.company}
              </p>
            )}
          </div>

          {/* Title Field */}
          <div className="mb-7">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full pb-4 pl-4 bg-transparent border-b ${
                errors.title ? 'border-[#f67e7e]' : 'border-white/80'
              } outline-none transition-all placeholder:text-white/60 focus:border-[#79c8c7]`}
            />
            {errors.title && (
              <p className="mt-2 pl-4 font-bold text-[#f67e7e] text-xs italic">
                {errors.title}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="mb-7">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full min-h-20 pb-4 pl-4 bg-transparent border-b ${
                errors.message ? 'border-[#f67e7e]' : 'border-white/80'
              } outline-none transition-all placeholder:text-white/60 focus:border-[#79c8c7]`}
            />
            {errors.message && (
              <p className="mt-2 pl-4 font-bold text-[#f67e7e] text-xs italic">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-white hover:bg-[#79c8c7] px-8 py-3 rounded-full font-semibold text-[#004047] text-lg transition-colors cursor-pointer"
            >
              submit
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}
