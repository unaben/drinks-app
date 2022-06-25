import React, { useState, ChangeEvent } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { ICreator } from "./interface/interfaces";
import Select from "./components/select/Select";
import Exhibition from "./components/exhibition/Exhibition";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Fetch from "./components/fetchComponent/Fetch";

function App() {
  const [exhibitions, setExhibitions] = useState<ICreator[]>([]);
  const [selectedType, setSelectedType] = useState<string>("");
  

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setSelectedType(event.target.value);
  };

  const drinkTypes = exhibitions.map((drink) => drink.type).sort();
  const uniqueDrinkTypes = new Set([...drinkTypes]);

  return (
    <div className="app-container">
      <Header />
      <Fetch setExhibitions={setExhibitions} />
      <Select
        filteredTitle={Array.from(uniqueDrinkTypes.values())}
        handleSelect={handleSelect}
        selectedTitle={selectedType}
      />
      {exhibitions
        .filter((exhibition: ICreator) => {
          return exhibition.type.includes(selectedType);
        })
        .map((exhibition: ICreator) => {
          return <Exhibition exhibition={exhibition} />;
        })}
      <Footer />
    </div>
  );
}
export default App;
