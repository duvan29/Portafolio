/** @type {import('next').NextConfig} */
const { locales, defaultLocale } = require('./i18n/config')

module.exports = {
    i18n: {
      locales,
      defaultLocale,
    },
  };
