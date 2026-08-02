import { NextResponse } from 'next/server'

interface ContactPayload {
  name?: unknown
  email?: unknown
  phone?: unknown
  subject?: unknown
  message?: unknown
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

export async function POST(request: Request) {
  let payload: ContactPayload

  try {
    payload = (await request.json()) as ContactPayload
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid JSON body.' }, { status: 400 })
  }

  const errors: Record<string, string> = {}

  const requiredFields: Array<{ field: keyof ContactPayload; max: number }> = [
    { field: 'name', max: 255 },
    { field: 'email', max: 255 },
    { field: 'subject', max: 255 },
    { field: 'message', max: 5000 },
  ]

  for (const { field, max } of requiredFields) {
    if (!isNonEmptyString(payload[field])) {
      errors[field] = 'This field is required.'
    } else if (payload[field].trim().length > max) {
      errors[field] = `Must be at most ${max} characters.`
    }
  }

  if (isNonEmptyString(payload.email) && !/^\S+@\S+\.\S+$/.test(payload.email.trim())) {
    errors.email = 'Invalid email address.'
  }

  if (payload.phone !== undefined && payload.phone !== null && payload.phone !== '') {
    if (typeof payload.phone !== 'string' || payload.phone.length > 50) {
      errors.phone = 'Invalid phone number.'
    }
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ success: false, errors }, { status: 422 })
  }

  const data = {
    name: (payload.name as string).trim(),
    email: (payload.email as string).trim(),
    phone: isNonEmptyString(payload.phone) ? (payload.phone as string).trim() : null,
    subject: (payload.subject as string).trim(),
    message: (payload.message as string).trim(),
    receivedAt: new Date().toISOString(),
  }

  console.log('Contact form submission:', data)

  return NextResponse.json({ success: true, message: 'Message received successfully.' }, { status: 201 })
}
