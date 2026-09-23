import { NextResponse } from "next/server";


export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get("lang") || "pt";

  try {
    return Response.json({ success: true, data: "bonjour monsieur! "+Math.floor(Math.random() * 100) });
  } catch (err) {
    return Response.json(
      { success: false, error: "API: Failed send one f'ing string" },
      { status: 500 }
    );
  }
}