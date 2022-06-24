import React from "react";
import { ICreator } from "../../interface/interfaces";
import Guest from "../guest/Guest";
import Comment from "../comment/Comment";

type ExhibitionProps = {
  exhibition: ICreator;
};

const Exhibition = ({ exhibition }: ExhibitionProps) => {
  return (
    <>
      <section className="py-4 bg-white">
        <div className="container">
          <div className="row text-center mb-3">
            <h2>Title: {exhibition.title}</h2>
            <div className="">
              <h3>Type: {exhibition.type}</h3>
              <h3>Location: {exhibition.location.name}</h3>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-3">
              <div>
                <div className="card shadow">
                  <img
                    src={exhibition.creator.avatarUrl}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body">
                    <h2>CREATOR</h2>
                    <div className="mb-3"></div>
                    <h2 key={exhibition.id}>{exhibition.creator.name}</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <Comment exhibition={exhibition} />
              <Guest exhibition={exhibition} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Exhibition;
