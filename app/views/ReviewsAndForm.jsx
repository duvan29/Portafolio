import React from 'react';
import Reviews from '../components/Reviews';

export default function ReviewsAndForm() {

    return (
        <div className="w-full pt-5 flex justify-between items-stretch">
          <div className="w-[50%] bg-gris-50 p-4 rounded-lg">
            <Reviews/>
          </div>
          <div className="w-[50%] pl-4 rounded-lg flex flex-col">
            {/* <Proyects/> */}
          </div>
      </div>
    );
}