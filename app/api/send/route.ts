import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.EMAIL_API);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, files } = body;

    // Build the email payload
    const emailPayload: any = {
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['gulnaharnima@gmail.com'],
      subject: `🌱 New Digital Seed from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #C7A9D9; border-radius: 10px; max-width: 600px;">
          <h2 style="color: #5FA14C;">New Vision from ${name}</h2>
          <p><strong>Sender Email:</strong> ${email}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #FDFBF4; border-radius: 8px; border-left: 4px solid #5FA14C;">
            <p style="color: #8A6DAF; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 10px; color: #E67E22; margin-top: 20px;">
            Sent from your Portfolio Garden • ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    };

    // Only attach files if the array exists and has content
    if (files && files.length > 0) {
      emailPayload.attachments = files.map((file: { name: string; content: string }) => ({
        filename: file.name,
        content: file.content,
      }));
    }

    const { data, error } = await resend.emails.send(emailPayload);

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("RESEND ERROR:", error); 
    return NextResponse.json(
      { error: (error as Error).message }, 
      { status: 500 }
    );
  }
}