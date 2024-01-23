import "./App.css";

import { useState } from "react";
import { Header } from "./components/header/header";

const data = localStorage.getItem("recentSearches");
const DataOfRecentSearch = data ? JSON.parse(data) : [];

function App() {
  const [recentSearches, setRecentSearches] = useState(DataOfRecentSearch);
  const [headerModalShouldBeClosed, setHeaderModalShouldBeClosed] = useState(false);

  const notifyModalOpened = () => {
    setHeaderModalShouldBeClosed(false);
  };

  const closeModal = () => {
    setHeaderModalShouldBeClosed(true);
  };

  const notifyParameters = (parameters) => {
    DataOfRecentSearch.push(parameters);
    localStorage.setItem("recentSearches", JSON.stringify(DataOfRecentSearch));
    setRecentSearches(JSON.parse(JSON.stringify(DataOfRecentSearch)));
  };

  return (
    <div className="App" onClick={() => closeModal()}>
      Hola mundo
      <Header notifyModalOpened={notifyModalOpened} shouldBeClosed={headerModalShouldBeClosed} recentSearches={recentSearches} notifyParameters={notifyParameters} />
    </div>
  );
}

export default App;
