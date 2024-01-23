import { Subtitle } from "../subtitle";
import { Title } from "../title";
import styles from "./index.module.css";

function SearchParameter({
  title,
  subtitle,
  itemSelected,
  notifyLocation,
  isInput,
}) {
  const cities = [
    "New York",
    "Yorkshire",
    "York",
    "Washington",
    "Maine",
    "Nevada",
    "Central",
    "Colorado",
    "Cupertino",
    "Arizona",
    "Barbados",
    "Dallas",
    "Jersey",
    "Luisiana",
    "Colombia",
    "La habana",
    "Haiti",
    "huila",
  ];
  const notifySelected = (title) => {
    itemSelected(title);
  };
  const locationSearched = (e) => {
    notifyLocation(e.target.value ?? "");
    const found = findLocation(e.target.value, cities);
    console.log(found);
  };

  const findLocation = (location, locations) => {
    if (!location || location === "") {
      // location sea undefined o null o ""
      // retornar la lista entera
      return locations;
    }
    // estamos seguros de que ni es null ni es ""
    
    // ejemplo, location = "la h"
    const locationWords = location.split(" "); // locationWords: ["la", "h"]
    const foundCities = {}; // foundCities: {}
    locationWords.forEach((word) => {
      // word: "la" ... "h"
      const mWord = word.toLowerCase();
      locations.forEach((city) => {
        // city: "New York"... "Dallas"... "Luisiana"
        const mCity = city.toLowerCase();
        const index = mCity.indexOf(mWord);
        if (index !== -1) {
          const points = index === 0 ? 2 : 1;
          // foundCities[city] ???? hay un Dallas en {}
          if (!foundCities[city]) foundCities[city] = 0; // {Dallas: 0}
          foundCities[city] += points; // {Dallas: 1}
        }
      });
    });
    // foundCities: {"Dallas": 1, "La habana": 3,"huila": 3,"Yorkshire": 1,"Washington": 1,"Haiti": 2 }
    const arr = [];
    for (const key in foundCities) {
      arr.push({ name: key, points: foundCities[key] });
    }
    /*
    [{ "name": "Dallas", "points": 1
    },{ "name": "La habana", "points": 3
    },{ "name": "huila", "points": 3
    },{ "name": "Yorkshire", "points": 1
    },{ "name": "Washington", "points": 1
    },{ "name": "Haiti", "points": 2 }]
    */
    arr.sort((a, b) => b.points - a.points);
    return arr.map((el) => el.name);
  };

  return (
    <div className={styles.boxSeparator} onClick={() => notifySelected(title)}>
      <Title text={title} />
      {isInput ? (
        <input
          type="text"
          placeholder="Explora destinos"
          className="subtitleFont"
          onChange={(e) => locationSearched(e)}
        />
      ) : (
        <Subtitle text={subtitle} />
      )}
    </div>
  );
}

export { SearchParameter };
