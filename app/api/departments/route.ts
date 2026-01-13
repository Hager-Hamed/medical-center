import { NextResponse } from "next/server";
import { departmentsData } from "@/app/lib/mock-data";

export async function GET() {
  return NextResponse.json({
    data: departmentsData,
  });
}
