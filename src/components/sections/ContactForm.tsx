'use client'

import { useState, type FormEvent } from 'react'
import { cn } from '@/lib/cn'

interface FormState {
  name:       string
  phone:      string
  email:      string
  service:    string
  interest:   string
  newsletter: boolean
}

interface FormErrors {
  name?:    string
  phone?:   string
  email?:   string
}

const initialState: FormState = {
  name:       '',
  phone:      '',
  email:      '',
  service:    '',
  interest:   '',
  newsletter: false,
}

function validatePhone(value: string) {
  const cleaned = value.replace(/[\s\-().]/g, '')
  return /^\+?[0-9]{7,15}$/.test(cleaned)
}

function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function ContactForm() {
  const [form, setForm]           = useState<FormState>(initialState)
  const [errors, setErrors]       = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    // Clear error on change
    if (name in errors) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validate = (): FormErrors => {
    const errs: FormErrors = {}
    if (!form.name.trim()) {
      errs.name = 'Please enter your name.'
    }
    if (!form.phone.trim()) {
      errs.phone = 'Please enter your phone number.'
    } else if (!validatePhone(form.phone)) {
      errs.phone = 'Please enter a valid phone number.'
    }
    if (form.email && !validateEmail(form.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    return errs
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 800))
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <div className="bg-white rounded-[20px] md:rounded-[30px] px-6 md:px-8 xl:px-[69px] py-8 md:py-10 xl:py-[70px] flex flex-col gap-8 xl:gap-[38px]">
      {/* Header */}
      <div>
        <p className="font-bold text-[24px] md:text-[26px] xl:text-[28px] leading-[1.2] text-black capitalize">
          Get in touch!
        </p>
        <p className="font-normal text-[14px] md:text-[15px] xl:text-[16px] leading-[1.5] text-black mt-1">
          Tell us a little about your situation.
        </p>
      </div>

      {submitted ? (
        <div className="flex flex-col gap-4 py-8">
          <p className="font-bold text-[22px] text-navy">Thank you.</p>
          <p className="font-normal text-[16px] text-navy/70 leading-[1.6]">
            We&apos;ll review your message and be in touch within one business day.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-[28px]">
          <Field label="What's your name?*" name="name" value={form.name} onChange={handleChange} required error={errors.name} />
          <Field label="What's your phone number?*" name="phone" value={form.phone} onChange={handleChange} type="tel" required error={errors.phone} />
          <Field label="What's your email?" name="email" value={form.email} onChange={handleChange} type="email" error={errors.email} />
          <Field label="What Service Are You Most Interested In?" name="service" value={form.service} onChange={handleChange} />
          <Field label="Describe your interest" name="interest" value={form.interest} onChange={handleChange} />

          {/* Newsletter */}
          <label className="flex items-start gap-3 cursor-pointer mt-2">
            <input
              type="checkbox"
              name="newsletter"
              checked={form.newsletter}
              onChange={handleChange}
              className="mt-0.5 shrink-0 size-[16px] rounded-[3px] border border-navy accent-navy"
            />
            <span className="font-normal text-[12px] md:text-[13px] xl:text-[14px] leading-[1.5] text-navy/60 lowercase">
              Subscribe to our newsletter and be the first to hear from us.
            </span>
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-navy text-white font-bold text-[18px] md:text-[19px] xl:text-[20px] leading-[1.2] capitalize py-[14px] rounded-full hover:opacity-80 transition-opacity disabled:opacity-50 mt-2"
          >
            {submitting ? 'Sending…' : 'Submit'}
          </button>
        </form>
      )}
    </div>
  )
}

function Field({
  label,
  name,
  value,
  onChange,
  type = 'text',
  required,
  error,
}: {
  label:    string
  name:     string
  value:    string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?:    string
  required?: boolean
  error?:   string
}) {
  return (
    <div className="flex flex-col gap-[6px]">
      <label htmlFor={name} className="sr-only">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={label}
        onChange={onChange}
        required={required}
        className={cn(
          'w-full bg-transparent border-b pb-2',
          'font-normal text-[14px] md:text-[15px] xl:text-[16px] leading-[1.4] text-black',
          'outline-none transition-colors',
          'placeholder:text-black',
          error
            ? 'border-red-500 focus:border-red-500'
            : 'border-black focus:border-navy',
        )}
      />
      {error && (
        <p className="font-normal text-[12px] md:text-[13px] xl:text-[14px] leading-[1.4] text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}
