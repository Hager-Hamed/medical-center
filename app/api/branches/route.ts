import { NextResponse } from "next/server";
import { branchesData } from "@/app/lib/mock-data";

export async function GET() {
  return NextResponse.json({
    data: branchesData,
  });
}
