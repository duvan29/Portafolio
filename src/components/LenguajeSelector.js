import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-translate';

function LanguageSelector() {
  const router = useRouter();
  const { lang } = useTranslation();

  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    router.push(router.pathname, router.asPath, { locale: selectedLanguage });
  };

  return (
    <div>
      <select onChange={changeLanguage} value={lang}>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
}

export default LanguageSelector;