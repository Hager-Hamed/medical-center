import { NextResponse } from "next/server";
import { blogsData } from "@/app/lib/mock-data";

export async function GET() {
  return NextResponse.json({
    data: blogsData,
    meta: {
      current_page: 1,
      total_pages: 1,
      total_items: blogsData.length,
    },
  });
}
