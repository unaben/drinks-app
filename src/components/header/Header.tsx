import React from "react";
import "../../styles/header.styles.css";

export default function Header() {
  return (
    <div className="header">
      <h1 className="display-6 fs-1">
        Drinks
        <img
          src={
            "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGRyaW5rc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          }
          alt="img"
        />
        Exhibition
      </h1>
    </div>
  );
}
