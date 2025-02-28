"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = async () => {
    const res = await fetch("/api/shorter", {
      method: "POST",
      body: JSON.stringify({ url }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    if (data.shortUrl) setShortUrl(data.shortUrl);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            URL Shortener
          </h1>
          <p className="text-gray-600">
            Enter a URL below to generate a short link.
          </p>
        </div>

        {/* Input Section */}
        <div className="flex flex-col w-full gap-4">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste your URL here..."
            className="w-full px-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
          />

          <button
            onClick={handleShorten}
            className="w-full px-4 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-md"
          >
            Shorten URL
          </button>
        </div>

        {/* Shortened URL Display */}
        {shortUrl && (
          <div className="mt-4 p-3 bg-gray-100 rounded-lg text-center w-full">
            <p className="text-gray-700">
              <span className="font-semibold">Shortened URL:</span>{" "}
              <a
                href={shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                {shortUrl}
              </a>
            </p>
          </div>
        )}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
