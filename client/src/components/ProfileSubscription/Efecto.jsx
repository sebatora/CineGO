import { useEffect, useState } from "react";

const TextAnimation = ({ word }) => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    setLetters(word.split(""));
  }, [word]);

  return (
    <div className="flex justify-center items-center p-4 bg-dark-100 mb-6 rounded-md">
      {letters.map((letter, index) => (
        <span
          key={index}
          className={`animate-colorAnimation text-3xl ${
            index % 2 === 0 ? "text-black" : "text-white"
          }`}
          style={{
            animationDelay: `${index * 0.1}s`, // Añade un retraso único para cada letra
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default TextAnimation;
