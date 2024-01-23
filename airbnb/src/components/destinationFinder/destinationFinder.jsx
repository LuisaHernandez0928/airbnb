import { BodyFont } from "../bodyFont/bodyFont";
import styles from "./index.module.css";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function DestinationFinder({ destinationOptions, destinationSearched, notifyLocation}) {

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
    return arr.map((el) => (
      <div className={styles.destinationCard} onClick={(e) => selectedDestination(e)}>
        <div className={styles.icon}><LocationOnOutlinedIcon sx={{ fontSize: 28}}/></div>
        <div className={styles.destination}> <BodyFont text={el.name} use={"search"}/></div>
      </div>
    ));
  };

  const selectedDestination =(e) =>{
    console.log(e.target.innerText);
    notifyLocation(e.target.innerText);
  }
  const found = findLocation(destinationSearched, destinationOptions);

  return <div className={styles.destitationContainer}>{found}</div>;
}

export { DestinationFinder };
