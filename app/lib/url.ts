// lib/url.ts or utils/url.ts

import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function handleShortenedUrl(slug: string) {
  try {
    const urlEntry = await prisma.shortenedUrl.findUnique({
      where: { slug: slug },
    });

    if (urlEntry) {
      redirect(urlEntry.original);
    } else {
      return null; // Or throw an error to be handled by the page
    }
  } catch (error) {
    console.error("Error handling shortened URL:", error);
    return null; // Or handle the error as needed
  }
}
