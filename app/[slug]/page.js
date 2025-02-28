import { handleShortenedUrl } from "../lib/url";

export default async function Page({ params }) {
  const { slug } = await params;

  const validateShortenedUrl = await handleShortenedUrl(slug);

  if (!validateShortenedUrl) {
    return <p>404</p>;
  }
}
