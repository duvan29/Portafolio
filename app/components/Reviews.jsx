import React, { useState } from 'react';
import CardReviews from './CardReviews';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

export default function Reviews({ reviews }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    const isFirstReview = currentIndex === 0;
    const newIndex = isFirstReview ? reviews.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextReview = () => {
    const isLastReview = currentIndex === reviews.length - 1;
    const newIndex = isLastReview ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full pt-5 flex justify-between items-center">
      <div
        className="hidden absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={prevReview}
      >
        {/* Botón izquierdo del carrusel */}
        <BsChevronCompactLeft size={30} />
      </div>
      <CardReviews />
      <div
        className="hidden absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={nextReview}
      >
        <BsChevronCompactRight size={30} />
      </div>
    </div>
  );
}