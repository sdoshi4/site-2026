import React from "react";

export default function Bubble({ left, top, name, bubbleAt, handleClick }) {
  const bgColor = bubbleAt === name ? "bg-red-600" : "bg-blue-900";

  return (
    <div
      className={`${bgColor} w-4 h-4 rounded-lg absolute transition`}
      style={{ left: left, top: top }}
      onClick={(e) => handleClick(name)}
    />
  );
}
