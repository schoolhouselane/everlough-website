import { NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name:    z.string().min(2).max(100),
  email:   z.string().email(),
  company: z.string().max(100).optional(),
  message: z.string().min(10).max(2000),
})

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)

  if (!body) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten().fieldErrors }, { status: 422 })
  }

  const { name, email, company, message } = parsed.data

  // Send email via Resend
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type':  'application/json',
      Authorization:   `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from:    'Everlough Website <noreply@everlough.com>',
      to:      ['enquiries@everlough.com'],
      replyTo: email,
      subject: `Website enquiry from ${name}${company ? ` — ${company}` : ''}`,
      text:    `Name: ${name}\nEmail: ${email}\nCompany: ${company ?? 'N/A'}\n\nMessage:\n${message}`,
    }),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 502 })
  }

  return NextResponse.json({ success: true })
}
