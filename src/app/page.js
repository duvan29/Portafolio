"use client";
import { useRouter } from "next/navigation";
import es from "/public/locales/es";
import en from '/public/locales/en'
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'es' ? es : en;

  return (
    <main className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-4">{t.title}</h1>
      <p className="text-lg text-center mb-6 max-w-md">{t.description}</p>
      <div className="flex space-x-4">
        <Link href="/" locale="en" className="px-4 py-2 rounded-md bg-blue-500 text-black hover:bg-blue-600">
            EN
        </Link>
          <Link href="/" locale="es" className="px-4 py-2 rounded-md bg-green-500 text-black hover:bg-green-600">
            ES
          </Link>
      </div>
    </main>
  );
}
