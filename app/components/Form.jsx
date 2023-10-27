import { useTranslations } from 'next-intl';
import React from 'react';

export default function Form() {
  const t = useTranslations("Form");
  return (
    <div className="w-full p-5 flex flex-col">
      <h1 className="text-2xl font-semibold text-center mb-5">{t("title")}</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="text-sm mb-1">{t("Name")}</label>
          <input
            type="text"
            id="name"
            name="name"
            className="p-2 w-full"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contact" className="text-sm mb-1">{t("Email")}</label>
          <input
            type="text"
            id="contact"
            name="contact"
            className="p-2 w-full"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="text-sm mb-1">{t("Message")}</label>
          <textarea
            id="message"
            name="message"
            className="p-2 w-full h-24"
          />
        </div>
        <div className='flex justify-center'>
          <button type="submit" className="bg-moradoBlack-50 text-white text-center py-2 px-8 rounded-full hover:bg-violeta">
            {t("Button")}
          </button>
        </div>
      </form>
    </div>
  );
}
