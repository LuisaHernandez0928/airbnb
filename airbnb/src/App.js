import "./App.css";

import { useState } from "react";
import { Header } from "./components/header/header";
import { FilterBar } from "./components/filterBar";
import data from "./data.json";
import { Card } from "./components/card/card";

import { RadioButton } from "./components/radioButton";

const dataLocal = localStorage.getItem("recentSearches");
const DataOfRecentSearch = dataLocal ? JSON.parse(dataLocal) : [];

function Modal({ children }) {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        left: "0px",
        top: "0px",
        zIndex: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        style={{
          width: "fit-content",
          height: "fit-content",
          borderRadius: "8px",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function App() {
  const [recentSearches, setRecentSearches] = useState(DataOfRecentSearch);
  const [headerModalShouldBeClosed, setHeaderModalShouldBeClosed] =
    useState(false);

  const notifyModalOpened = () => {
    setHeaderModalShouldBeClosed(false);
  };

  const closeModal = () => {
    setHeaderModalShouldBeClosed(true);
  };

  const removeOldDestination = (newDestination) => {
    DataOfRecentSearch.shift();
    DataOfRecentSearch.push(newDestination);
  };

  const notifyParameters = (parameters) => {
    DataOfRecentSearch.length <= 4
      ? DataOfRecentSearch.push(parameters)
      : removeOldDestination(parameters);
    localStorage.setItem("recentSearches", JSON.stringify(DataOfRecentSearch));
    setRecentSearches(JSON.parse(JSON.stringify(DataOfRecentSearch)));
  };

  const itemAirbnb = (
    position,
    images,
    favoritoHuspedes,
    description,
    availability,
    price
  ) => {
    return (
      <div key={position}>
        <Card
          images={images}
          favoritoHuspedes={favoritoHuspedes}
          description={description}
          availability={availability}
          price={price}
        />
      </div>
    );
  };

  const galleryAirbnb = () => {
    const gallery = [];
    for (let i = 1; i < Object.keys(data).length; i++) {
      gallery.push(
        itemAirbnb(
          i,
          data[i].pics,
          data[i].guestsFavorite,
          data[i].description,
          data[i].availability[0].date,
          data[i].availability[0].price
        )
      );
    }
    return gallery;
  };

  return (
    <div className="App" onClick={() => closeModal()}>
      <Header
        notifyModalOpened={notifyModalOpened}
        shouldBeClosed={headerModalShouldBeClosed}
        recentSearches={recentSearches}
        notifyParameters={notifyParameters}
      />
      <FilterBar data={data} />
      <div className="galeryConrainer">{galleryAirbnb()}</div>

      <Modal>
        <RadioButton />
      </Modal>
    </div>
  );
}

export default App;
