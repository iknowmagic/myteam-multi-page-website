import React, { useState } from 'react'

/**
 * Custom hook for form handling and validation
 * Replaces Vuelidate functionality from the original Vue.js project
 */
export default function useForm<T extends Record<string, any>>(
  initialValues: T,
  validations: Record<
    keyof T,
    (_value: any) => boolean | { valid: boolean; message: string }
  >,
) {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<Record<keyof T, string | null>>(
    {} as Record<keyof T, string | null>,
  )
  const [touched, setTouched] = useState<Record<keyof T, boolean>>(
    {} as Record<keyof T, boolean>,
  )
  const [isSubmitting, setIsSubmitting] = useState(false)

  /**
   * Validates a single field
   */
  const validateField = (name: keyof T, value: any): string | null => {
    const validation = validations[name]
    if (!validation) return null

    const result = validation(value)

    if (typeof result === 'boolean') {
      return result ? null : 'This field is required'
    } else {
      return result.valid ? null : result.message
    }
  }

  /**
   * Validates all form fields
   */
  const validateForm = (): boolean => {
    const newErrors: Record<keyof T, string | null> = {} as Record<
      keyof T,
      string | null
    >
    let isValid = true

    // Check each field with its validation rule
    Object.keys(validations).forEach((key) => {
      const fieldKey = key as keyof T
      const error = validateField(fieldKey, values[fieldKey])
      newErrors[fieldKey] = error

      // Mark field as touched on form submission
      setTouched((prev) => ({ ...prev, [fieldKey]: true }))

      if (error) {
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }

  /**
   * Handles field change
   */
  const handleChange = (name: keyof T, value: any) => {
    setValues({ ...values, [name]: value })

    // Validate field if it's already been touched
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  /**
   * Handles field blur - validates field when user leaves it
   */
  const handleBlur = (name: keyof T) => {
    setTouched((prev) => ({ ...prev, [name]: true }))
    const error = validateField(name, values[name])
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  /**
   * Handles form submission
   */
  const handleSubmit = async (
    onSubmit: (_values: T) => void | Promise<void>,
    event?: React.FormEvent,
  ) => {
    if (event) {
      event.preventDefault()
    }

    const isValid = validateForm()

    if (isValid) {
      setIsSubmitting(true)
      try {
        await onSubmit(values)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  /**
   * Resets form to initial values
   */
  const resetForm = () => {
    setValues(initialValues)
    setErrors({} as Record<keyof T, string | null>)
    setTouched({} as Record<keyof T, boolean>)
  }

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  }
}

/**
 * Common validation functions
 */
export const validators = {
  required: (value: any) => {
    if (value === undefined || value === null) return false
    return String(value).trim().length > 0
  },

  email: (value: string) => {
    if (!value) return { valid: false, message: 'This field is required' }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return {
      valid: emailRegex.test(value),
      message: emailRegex.test(value) ? '' : 'Invalid email address',
    }
  },
}
