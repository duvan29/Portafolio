"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

export default function Header() {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  
  const t = useTranslations("Button");

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <header className="flex justify-between items-center py-4 relative">
      <h1 className="text-left">Duvan_Dev</h1>
      <div className="text-right flex space-x-4 relative">
      <button
      className={`p-2 rounded-lg bg-gris-50`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>}
    </button>
    <button
      className={`bg-${showContent ? '#FEFFEF' : '#FEFFEF'} bg-gris-50 hover:bg-white color-white p-2 rounded-lg`}
      onClick={toggleContent}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke={showContent ? '#7f00b2' : 'currentColor'} className="w-12 h-10 transition-colors">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    </button>
        {showContent && (
          <div className="absolute top-[70px] right-[0px] w-[200px] p-2 bg-slate-200 bg-gris-50 rounded-lg">
            <Link href="/es" locale="es">
              <button className="px-4 py-2 my-2 rounded-[200px] bg-grisL-50 hover:bg-white text-white hover:text-moradoBlack dark:bg-black-50 dark:hover:bg-white dark:hover:hover:text-moradoBlack w-full">
                  {t("bottonES")}
              </button>
            </Link>
            <Link href="/en" locale="en">
              <button className="px-4 py-2  my-2  rounded-[200px] bg-grisL-50 hover:bg-white text-white  hover:text-moradoBlack dark:bg-black-50 dark:hover:bg-white dark:hover:hover:text-moradoBlack  w-full">
                    {t("bottonEN")}
                </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
