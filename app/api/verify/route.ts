import { NextResponse } from "next/server";

// The access code. Override in production via the QUOTE_ACCESS_CODE env var
// (set it as an OSC parameter/secret when deploying). Default is for local use.
const ACCESS_CODE = process.env.QUOTE_ACCESS_CODE || "INTERCOMBBC2026";

export async function POST(request: Request) {
  let code = "";
  try {
    const body = await request.json();
    code = (body?.code ?? "").toString();
  } catch {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  if (code && code === ACCESS_CODE) {
    // Simple reveal token (base64 of code + timestamp), mirroring the template.
    const token = Buffer.from(`${code}-${Date.now()}`).toString("base64");
    return NextResponse.json({ success: true, token });
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
