import { Resend } from 'resend'

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json({ error: 'Server email is not configured (missing RESEND_API_KEY)' }, { status: 500 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const body = await req.json()
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['sukhbir2506@outlook.com'],
      subject: `Portfolio Contact: ${subject}`,
      replyTo: `${name} <${email}>`,
      html: `
        <div>
          <h2>New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json({ ok: true })
  } catch {
    return Response.json({ error: 'Failed to send message' }, { status: 500 })
  }
}