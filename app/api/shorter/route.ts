import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { nanoid } from "nanoid";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { url } = await req.json();
  if (!url)
    return NextResponse.json({ error: "URL is required" }, { status: 400 });

  const slug = nanoid(6); // Generate short URL identifier
  const newUrl = await prisma.shortenedUrl.create({
    data: { slug, original: url },
  });

  return NextResponse.json({
    shortUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/${slug}`,
  });
}
