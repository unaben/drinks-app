import React, { useEffect, useState, ChangeEvent } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { ICreator } from "./components/interfaces";
import Guest from "./components/guest/Guest";
import Comment from "./components/comment/Comment";
import Select from "./components/select/Select";
import Exhibition from "./components/exhibition/Exhibition";

function App() {
  const [exhibitions, setExhibitions] = useState<ICreator[]>([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  console.log("Select:", selectedTitle);

  const searchExhibition = async () => {
    const response = await fetch(
      "https://mock-api.drinks.test.siliconrhino.io/events"
    );
    const data = await response.json();
    console.log("Exhbition:", data);
    setExhibitions(data);
  };

  useEffect(() => {
    searchExhibition();
  }, []);

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setSelectedTitle(event.target.value);
  };

  const newExhibition =
  exhibitions && exhibitions.map((exhibition) => exhibition.title).sort();
  console.log("newExhibition :", newExhibition);

  const filteredTitle = newExhibition.filter(
    (data, index) => newExhibition.indexOf(data) === index
  );
  console.log("Filter:", filteredTitle);

  return (
    <div className="app-container">
      <header>
        <Header />
      </header>
      <form className="select-form">
        <Select
          filteredTitle={filteredTitle}
          handleSelect={handleSelect}
          selectedTitle={selectedTitle}
        />
      </form>
      {exhibitions &&
        exhibitions
          .filter((exhibition: ICreator) => {
            return exhibition.title.includes(selectedTitle);
          })
          .map((exhibition: ICreator) => {
            return (
              <div className="map-container">
                <Exhibition exhibition={exhibition} />
                <div className="two-column-grid-auto ">
                  <Guest exhibition={exhibition} />
                  <Comment exhibition={exhibition} />
                </div>
              </div>
            );
          })}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default App;
