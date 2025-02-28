// app/[slug]/page.tsx

import { notFound } from "next/navigation";
import { handleShortenedUrl } from "../lib/url";

// interface PageProps {
//   params: {
//     slug: string;
//   };
// }

export default async function Page({ params }: any) {
  const result = await handleShortenedUrl(params.slug);

  if (result === null) {
    return notFound();
  }

  // The redirect happens within handleShortenedUrl, so this part should not run if it redirects.
  return null; // Or an empty fragment: <></>
}
