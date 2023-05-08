"use client";
import React from "react";
import dropStyles from "../styles/Dropdown.module.css";
import { useState, useRef } from "react";

const DetailDrop = ({ question, answer }) => {
  const iconRef = useRef();
  const detailRef = useRef();
  const [open, setOpen] = useState(false);
  console.log(detailRef.current)

  return (
    <details className={dropStyles.details} ref={detailRef}>
      <summary
        className={dropStyles.summary}
        onClick={() => {
          setOpen((prev) => !prev);
          if (!open) {
            iconRef.current.style.rotate = "135deg";
          } else {
            iconRef.current.style.rotate = "0deg";
          }
        }}
      >
        <p className="base-text">{question}</p>
        <i ref={iconRef} className="fa-solid fa-plus base-text"></i>
      </summary>
      <p className={`base-text ${dropStyles.drop}`}>{answer}</p>
    </details>
  );
};

export default DetailDrop;
