import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  message: string;
  timeline: string;
};

function validate(payload: Partial<ContactPayload>) {
  const errors: Partial<Record<keyof ContactPayload, string>> = {};

  if (!payload.name || typeof payload.name !== "string" || payload.name.trim().length < 3) {
    errors.name = "Name must be at least 3 characters.";
  }

  if (!payload.email || typeof payload.email !== "string") {
    errors.email = "Email is required.";
  } else {
    const emailRegex = /^[\w.!#$%&'*+/=?`{|}~-]+@[\w-]+\.[\w.-]+$/;
    if (!emailRegex.test(payload.email)) {
      errors.email = "Enter a valid email address.";
    }
  }

  if (!payload.company || typeof payload.company !== "string" || payload.company.trim().length < 2) {
    errors.company = "Company must be at least 2 characters.";
  }

  if (!payload.message || typeof payload.message !== "string" || payload.message.trim().length < 12) {
    errors.message = "Tell us a bit more about your project.";
  }

  if (!payload.timeline || typeof payload.timeline !== "string") {
    errors.timeline = "Choose an implementation timeline.";
  }

  return errors;
}

export async function POST(request: Request) {
  try {
    const json = (await request.json()) as Partial<ContactPayload>;
    const errors = validate(json);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { message: "Please fix the highlighted fields.", errors },
        { status: 400 },
      );
    }

    const submission = {
      ...json,
      submittedAt: new Date().toISOString(),
      userAgent: request.headers.get("user-agent") ?? "unknown",
    };

    console.log("[VoltSense][contact]", JSON.stringify(submission));

    return NextResponse.json({ message: "Submission received." });
  } catch (error) {
    console.error("[VoltSense][contact][error]", error);
    return NextResponse.json(
      { message: "Unable to process contact request." },
      { status: 500 },
    );
  }
}
