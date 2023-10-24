import { useTranslations } from 'next-intl';
import React from 'react';

export default function TimeLine() {
  const t = useTranslations("TimeLine");
  return (
    <div className="w-full">
        <h1 className="text-2xl font-semibold text-center mb-5">{t("title")}</h1>
    </div>
  );
}