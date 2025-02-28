import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function handleShortenedUrl(slug: string) {
  const urlEntry = await prisma.shortenedUrl.findUnique({
    where: { slug: slug },
  });

  if (urlEntry) {
    redirect(urlEntry.original);
  } else {
    return null;
  }
}
