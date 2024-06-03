import React from "react";

const LC_Patterns = () => {
  const imageNumbers = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
      {imageNumbers.map((num) => (
        <img
          key={num}
          src={`/LC_Patterns/LC_${num}.png`}
          alt={`LC Pattern ${num}`}
          className="w-[95%] h-auto rounded-2xl mx-auto"
        />
      ))}
    </div>
  );
};

export default LC_Patterns;
