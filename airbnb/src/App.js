import "./App.css";

import { useState } from "react";
import { Header } from "./components/header/header";
import { FilterBar } from "./components/filterBar";
import data from "./data.json";


const dataLocal = localStorage.getItem("recentSearches");
const DataOfRecentSearch = dataLocal ? JSON.parse(dataLocal) : [];

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

  return (
    <div className="App" onClick={() => closeModal()}>
      Hola mundo
      <Header
        notifyModalOpened={notifyModalOpened}
        shouldBeClosed={headerModalShouldBeClosed}
        recentSearches={recentSearches}
        notifyParameters={notifyParameters}
      />
      <FilterBar data={data} />
    </div>
  );
}

export default App;
