import React from 'react';
import Front from '../components/Font';
import Back from '../components/Back';

export default function Skills() {
  return (
    <div className="w-full pt-5 flex justify-between items-stretc">
        <div className="w-[49%] bg-gris-50 p-4 rounded-lg">
        <Front/>
        </div>
      <div className="w-[49%] bg-gris-50 p-4 rounded-lg">
        <Back/>
      </div>
    </div>
  );
}
