import { NextResponse } from "next/server";

import { auth } from "@clerk/nextjs";

import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    const { title } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 400 });
    }

    const course = await db.course.create({
      data: {
        userId,
        title,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
