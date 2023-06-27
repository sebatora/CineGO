import React, { useEffect, useState } from "react";
import style from "./Efecto.module.css";

const TextAnimation = ({ word }) => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    setLetters(word.split(""));
  }, [word]);

  return (
    <div className={style.textAnimation}>
      {letters.map((letter, index) => (
        <span
          key={index}
          className={`${style.animatedLetter} ${
            index % 2 === 0 ? style.black : style.white
          }`}
          style={{
            animationDelay: `${index * 0.5}s`, // Añade un retraso único para cada letra
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default TextAnimation;
