import { NextResponse } from "next/server";
import { newsData } from "@/app/lib/mock-data";

export async function GET() {
  return NextResponse.json({
    data: newsData,
  });
}
