'use client'

import { useState, type FormEvent } from 'react'
import { cn } from '@/lib/cn'

interface FormState {
  name:     string
  phone:    string
  email:    string
  service:  string
  interest: string
  newsletter: boolean
}

const initialState: FormState = {
  name:       '',
  phone:      '',
  email:      '',
  service:    '',
  interest:   '',
  newsletter: false,
}

export function ContactForm() {
  const [form, setForm]         = useState<FormState>(initialState)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-[39px]">
          <Field label="What's your name?*" name="name" value={form.name} onChange={handleChange} required />
          <Field label="What's your phone number?*" name="phone" value={form.phone} onChange={handleChange} type="tel" required />
          <Field label="What's your email?" name="email" value={form.email} onChange={handleChange} type="email" />
          <Field label="What Service Are You Most Interested In?" name="service" value={form.service} onChange={handleChange} />
          <Field label="Describe your interest" name="interest" value={form.interest} onChange={handleChange} />

          {/* Newsletter */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="newsletter"
              checked={form.newsletter}
              onChange={handleChange}
              className="mt-0.5 shrink-0 size-[16px] rounded-[3px] border border-navy accent-navy"
            />
            <span className="font-normal text-[12px] md:text-[13px] xl:text-[14px] leading-[1.5] text-navy/60 lowercase">
              Subscribe to our newsletter — don&apos;t miss out on anything from us.
            </span>
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-navy text-white font-bold text-[18px] md:text-[19px] xl:text-[20px] leading-[1.2] capitalize py-[14px] rounded-full hover:opacity-80 transition-opacity disabled:opacity-50"
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
}: {
  label:    string
  name:     string
  value:    string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?:    string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-[10px]">
      <label htmlFor={name} className="font-normal text-[14px] md:text-[15px] xl:text-[16px] leading-[1.4] text-black">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className={cn(
          'w-full bg-transparent border-b border-black/30 pb-2',
          'font-normal text-[14px] md:text-[15px] xl:text-[16px] leading-[1.4] text-black',
          'outline-none focus:border-navy transition-colors',
          'placeholder:text-black/30',
        )}
      />
    </div>
  )
}
