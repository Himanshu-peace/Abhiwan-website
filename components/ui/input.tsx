import React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  type?: 'text' | 'email' | 'tel' | 'textarea'
  className?: string
  placeholder?: string
  required?: boolean
  rows?: number
}

export default function Input({
  type = 'text',
  className = '',
  placeholder = '',
  required = false,
  rows = 3,
  ...props
}: InputProps) {
  const baseClasses = 'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50'
  
  const typeClasses = {
    text: baseClasses,
    email: baseClasses,
    tel: baseClasses,
    textarea: `${baseClasses} resize-none`,
  }

  if (type === 'textarea') {
    return (
      <textarea
        className={`${typeClasses[type]} ${className}`}
        placeholder={placeholder}
        required={required}
        rows={rows}
        {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
      />
    )
  }

  return (
    <input
      type={type}
      className={`${typeClasses[type]} ${className}`}
      placeholder={placeholder}
      required={required}
      {...props as React.InputHTMLAttributes<HTMLInputElement>}
    />
  )
}
