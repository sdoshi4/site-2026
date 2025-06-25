import React from "react";

export default function Profile({ img, Name, Position, Class, Major }) {
  return (
    <div className="p-4 w-[100%] sm:w-[33%] md:w-[20%] flex justify-center items-center flex-col sm:justify-start sm:items-start">
      <img
        src={`assets/headshots/${img}`}
        alt="headshot"
        className="w-40 h-44 shadow-md object-cover rounded-xl"
        width={160}
        height={176}
        style={{}}
      />
      <h3 className="font-montserrat font-bold text-md pt-2 pb-0">{Name}</h3>
      <h3 className="font-montserrat font-light text-red-800 text-md py-0">
        {Position}
      </h3>
      <h3 className="font-montserrat font-light text-md py-0">{Major}</h3>
      <h3 className="font-montserrat font-light text-md py-0">{Class}</h3>
    </div>
  )
}
