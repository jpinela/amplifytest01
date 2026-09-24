// app/api/agreements/route.js
import { NextResponse } from "next/server";
import { getAgreementsListByLanguage } from "@/app/lib/dynamodb";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get("lang") || "pt";

  try {
    const agreements = await getAgreementsListByLanguage(lang);
    console.log(agreements);
    return NextResponse.json(agreements);
  } catch (error) {
    return NextResponse.json(
      { error: "API: Failed to fetch agreements" },
      { status: 500 }
    );
  }
}