import React from "react";
import "./guest.styles.css"
import { ICreator } from "../interfaces";
type GuestProps = {
  exhibition: ICreator;
};
const Guest = ({ exhibition }: GuestProps) => {
  return (
    <div>
      {exhibition.guests &&
        exhibition.guests.map((guest, index) => {
          return (
            <div className="two-column-grid">
            <div className="card-container">
              <div className="wrapper">
                <img src={guest.avatarUrl} alt="user-img" />
                <div className="text-wrapper">
                  <h2 style={{ textAlign: "center" }}>GUEST</h2>
                  <h2 style={{ textAlign: "center" }} key={index}>
                    {guest.name}
                  </h2>
                </div>
              </div>
            </div>
            </div>
          );
        })}
    </div>
  );
};
export default Guest;
