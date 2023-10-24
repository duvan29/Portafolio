import Image from 'next/image';
import React from 'react';

export default function CardReviews() {
  return (
    <div>
    <div className="absolute -ml-[20px] w-[50px] h-[50px] flex justify-center items-center pb-[14px] pr-[12px] rotate-180">
              <svg  
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="100%"
              height="100%"
              fill="#7f00b2">
              <path d="m7.998 13.118c0 1.69 1.32 3.06 2.946 3.06.522 0 1.004-.152 1.43-.4-.146 1.636-.97 4.022-3.99 6.454-.422.342-.5.974-.172 1.412.192.256.478.39.766.39.208 0 .416-.068.594-.212 3.706-2.99 4.632-6.062 4.756-8.114.212-2.624-.584-4.004-1.312-4.724-.066-.07-.128-.146-.202-.208-.174-.148-.33-.252-.466-.33-.006-.004-.01-.01-.016-.012-.01-.006-.02-.008-.03-.012-.198-.11-.34-.162-.34-.162l.01.024c-.322-.132-.66-.226-1.028-.226-1.628 0-2.946 1.37-2.946 3.06zm9.696 0c0 1.69 1.318 3.06 2.946 3.06.522 0 1.004-.152 1.43-.4-.146 1.636-.97 4.022-3.99 6.454-.424.342-.5.974-.172 1.412.192.256.478.39.766.39.208 0 .416-.068.594-.212 3.706-2.99 4.632-6.062 4.756-8.114.212-2.624-.586-4.004-1.312-4.724-.068-.07-.13-.146-.204-.208-.174-.148-.33-.252-.466-.33-.006-.004-.01-.008-.016-.012-.01-.006-.02-.008-.03-.012-.198-.108-.34-.162-.34-.162l.01.024c-.322-.132-.662-.226-1.028-.226-1.626 0-2.944 1.37-2.944 3.06z"/>
          </svg>
    </div>
    <div className="m-3 p-4 rounded-lg">
      <div className="mb-4">
        <p className="overflow-hidden text-[15px] ">
        Anim dolor ad adipisicing sint nisi. Aute adipisicing ex consequat dolor cillum enim anim deserunt amet voluptate occaecat consequat. Voluptate deserunt officia aliqua ad adipisicing occaecat anim veniam dolor ut. Do deserunt mollit deserunt elit commodo quis. Ex ullamco ullamco commodo ut quis velit commodo culpa. Reprehenderit anim elit nisi quis ipsum id anim aliquip labore amet veniam. Sunt nostrud do fugiat ea.
        </p>
      </div>
      <div className='flex justify-end '>
        <div className="-mt-[45px] -mr-[45px]  w-[50px] h-[50px] flex pb-[12px] pr-[12px]">
            <svg  
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="100%"
            height="100%"
            fill="#7f00b2">
                <path d="m7.998 13.118c0 1.69 1.32 3.06 2.946 3.06.522 0 1.004-.152 1.43-.4-.146 1.636-.97 4.022-3.99 6.454-.422.342-.5.974-.172 1.412.192.256.478.39.766.39.208 0 .416-.068.594-.212 3.706-2.99 4.632-6.062 4.756-8.114.212-2.624-.584-4.004-1.312-4.724-.066-.07-.128-.146-.202-.208-.174-.148-.33-.252-.466-.33-.006-.004-.01-.01-.016-.012-.01-.006-.02-.008-.03-.012-.198-.11-.34-.162-.34-.162l.01.024c-.322-.132-.66-.226-1.028-.226-1.628 0-2.946 1.37-2.946 3.06zm9.696 0c0 1.69 1.318 3.06 2.946 3.06.522 0 1.004-.152 1.43-.4-.146 1.636-.97 4.022-3.99 6.454-.424.342-.5.974-.172 1.412.192.256.478.39.766.39.208 0 .416-.068.594-.212 3.706-2.99 4.632-6.062 4.756-8.114.212-2.624-.586-4.004-1.312-4.724-.068-.07-.13-.146-.204-.208-.174-.148-.33-.252-.466-.33-.006-.004-.01-.008-.016-.012-.01-.006-.02-.008-.03-.012-.198-.108-.34-.162-.34-.162l.01.024c-.322-.132-.662-.226-1.028-.226-1.626 0-2.944 1.37-2.944 3.06z"/>
            </svg>
        </div>
      </div>
      <div className="border-t border-secondary-dm opacity-20"></div>
      <div className="flex items-center mb-2 mt-4">
        <Image 
          src="/public/img/bg.jpg"
          alt={`Imagen de vervre`} 
          className="w-20 h-20 rounded-full mr-5"         
          width={245}
          height={154}/>
        <div className='flex flex-col'>
          <h3 className='text-[18px]'>userName</h3>
          <p className='text-[15px]'>rol</p>
        </div>
      </div>
    </div>
  </div>
  );
}