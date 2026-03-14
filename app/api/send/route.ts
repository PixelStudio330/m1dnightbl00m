import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.EMAIL_API);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, files } = body;

    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['gulnaharnima@gmail.com'],
      subject: `🌱 New Digital Seed from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #C7A9D9; border-radius: 10px;">
          <h2 style="color: #5FA14C;">New Vision from ${name}</h2>
          <p><strong>Email:</strong> ${email}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #FDFBF4; border-radius: 8px;">
            <p style="color: #8A6DAF;">${message}</p>
          </div>
          <p style="font-size: 10px; color: #E67E22; margin-top: 20px;">Sent from your Portfolio Garden</p>
        </div>
      `,
      attachments: files?.map((file: { name: string; content: string }) => ({
        filename: file.name,
        content: file.content,
      })),
    });

    // Helpful for debugging - check your terminal logs
    console.log("Resend Response:", data);

    return NextResponse.json(data);
  } catch (error) {
    console.error("RESEND ERROR:", error); 
    return NextResponse.json(
      { error: (error as Error).message }, 
      { status: 500 }
    );
  }
}