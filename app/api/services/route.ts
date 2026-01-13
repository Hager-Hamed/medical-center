import { NextResponse } from "next/server";
import { servicesData } from "@/app/lib/mock-data";

export async function GET() {
  return NextResponse.json({
    data: servicesData,
  });
}
