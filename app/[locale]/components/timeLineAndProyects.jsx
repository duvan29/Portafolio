import React from 'react';
import timeLine from './timeLine';

export default function timeLineAndProyects() {
  return (
    <div className="w-full pt-5 flex justify-between items-center">
        <div className="w-[70%] bg-gris-50 p-4 rounded-lg">
         <timeLineAnd/>
        </div>
        <div className="w-[30%] p-4 rounded-lg flex flex-col">
            <div className='h-[50%] bg-gris-50'>
                everber
            </div>
            <div className='h-[50%] bg-gris-50'>
                Holavwenp
            </div>
        </div>
    </div>
  );
}