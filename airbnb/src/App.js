import "./App.css";

import { useState } from "react";
import { Header } from "./components/header/header";
import { FilterBar } from "./components/filterBar";
import data from "./data.json";
import { Card } from "./components/card/card";

const dataLocal = localStorage.getItem("recentSearches");
const DataOfRecentSearch = dataLocal ? JSON.parse(dataLocal) : [];

function App() {
  const [recentSearches, setRecentSearches] = useState(DataOfRecentSearch);
  const [headerModalShouldBeClosed, setHeaderModalShouldBeClosed] =
    useState(false);
  const [filterModalShouldBeClosed, setFilterModalShouldBeClosed] =
    useState(false);

  const notifyModalOpened = () => {
    setHeaderModalShouldBeClosed(false);
    setFilterModalShouldBeClosed(false);
  };

  const closeModal = () => {
    setHeaderModalShouldBeClosed(true);
    setFilterModalShouldBeClosed(true);
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
      <FilterBar
        data={data}
        notifyModalOpened={notifyModalOpened}
        shouldBeClosed={filterModalShouldBeClosed}
      />
      <div className="galeryConrainer">{galleryAirbnb()}</div>
    </div>
  );
}

export default App;
