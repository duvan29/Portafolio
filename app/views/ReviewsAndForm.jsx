"use client"
import React from 'react';
import Reviews from '../components/Reviews';
import Form from '../components/Form';

import { Swiper, SwiperSlide } from 'swiper/react';
import CardReviews from '../components/CardReviews';

export default function ReviewsAndForm() {

    return (
        <div className="w-full pt-5 flex justify-between items-stretc">
            <div className="w-[49%] bg-gris-50 p-4 rounded-lg">
                <Reviews/>
            </div>
            <div className="w-[49%] bg-gris-50 p-4 rounded-lg">
                <Form/>
            </div>
        </div>
    );
}