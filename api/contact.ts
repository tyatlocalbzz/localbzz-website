import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, phone, email, howDidYouHear, submittedAt } = req.body

  // Validate required fields
  if (!name || !phone || !email) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    await resend.emails.send({
      from: 'LocalBzz <noreply@localbzz.com>',
      to: ['ty@localbzz.com', 'jeff@localbzz.com'],
      subject: `New Lead: ${name}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #111; border-bottom: 3px solid #FFC000; padding-bottom: 10px;">New Contact Form Submission</h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 40%;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                <a href="tel:${phone}" style="color: #111;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                <a href="mailto:${email}" style="color: #111;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold;">How they found us</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${howDidYouHear || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; font-weight: bold;">Submitted</td>
              <td style="padding: 12px 0;">${new Date(submittedAt).toLocaleString('en-US', {
                timeZone: 'America/Chicago',
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit'
              })}</td>
            </tr>
          </table>

          <p style="margin-top: 30px; padding: 15px; background: #FFC000; color: #111; font-weight: bold;">
            Remember: Call them within 24 hours!
          </p>
        </div>
      `
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Email send failed:', error)
    // Still return success to user - we have localStorage backup on frontend
    return res.status(200).json({ success: true, warning: 'Email notification failed' })
  }
}
