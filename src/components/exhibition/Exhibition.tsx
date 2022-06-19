import React from "react";
import "./exhibition.styles.css"
import { ICreator } from "../interfaces";

type ExhibitionProps = {
  exhibition: ICreator;
};

const Exhibition = ({ exhibition }: ExhibitionProps) => {
  return (
    <>
      <div className="heading-container">
        <h2>Title: {exhibition.title}</h2>
        <div className="heading">
          <h3>Type: {exhibition.type}</h3>
          <h3>Location: {exhibition.location.name}</h3>
        </div>
      </div>
      <div className="card-container">
        <div className="wrapper">
          <img src={exhibition.creator.avatarUrl} alt="avatar-img" />
          <div className="text-wrapper">
            <h2 style={{ textAlign: "center" }}>CREATOR</h2>
            <h2 style={{ textAlign: "center" }} key={exhibition.id}>
              {exhibition.creator.name}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default Exhibition;
