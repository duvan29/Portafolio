import React from 'react';
import Reviews from '../components/Reviews';
import Form from '../components/Form';

export default function ReviewsAndForm() {

    return (
        <div className="w-full pt-5 flex justify-between items-stretch">
          <div className="w-[49%] bg-gris-50 p-4 rounded-lg">
            <Reviews/>
          </div>
          <div className="w-[49%] p-4 rounded-lg bg-gris-50">
            <Form/>
          </div>
      </div>
    );
}