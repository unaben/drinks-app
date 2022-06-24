import React from "react";
import { ICreator } from "../../interface/interfaces";

type GuestProps = {
  exhibition: ICreator;
};
const Guest = ({ exhibition }: GuestProps) => {
  return (
    <div className="row mb-3">
      {exhibition.guests &&
        exhibition.guests.map((guest, index) => {
          return (
            <>
              <div className="col-sm-6 col-md-4 mb-3">
                <div className="card shadow">
                  <img
                    src={guest.avatarUrl}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body text-center">
                    <h2>GUEST</h2>
                    <div className="mb-3"></div>
                    <h2 key={index}>{guest.name}</h2>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};
export default Guest;
