import { NextResponse } from "next/server";
import { doctorsData } from "@/app/lib/mock-data";

export async function GET() {
  return NextResponse.json({
    data: doctorsData,
  });
}
