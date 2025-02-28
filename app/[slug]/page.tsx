import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export default async function Page({ params }: { params: { slug: string } }) {
  const urlEntry = await prisma.shortenedUrl.findUnique({
    where: { slug: params.slug },
  });

  if (urlEntry) {
    redirect(urlEntry.original); // Redirect to original URL
  } else {
    return <h1>404 - Not Found</h1>;
  }
}
