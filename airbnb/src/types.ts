import data from './data.json';

interface Services {
  name: string;
  value: boolean;
};

interface BookingOption {
  name: string;
  value: boolean;
};

interface AvailableNight {
  date: string[];
  price: number;
};

interface Airbnb {
  pics: string[];
  description: string;
  guestsFavorite: boolean;
  score: number;
  numReviews: number;
  beds: number;
  rooms: number;
  peopleCapacity: number;
  baths: number;
  bathKind: string;
  tipoAlojamiento: string;
  tipoPropiedad: string;
  services: Services[];
  bookingOptions: BookingOption[];
  location: {
    continent: string;
    country: string;
    city: string;
    state: string;
    neighborhood: string;
    lat: number;
    long: number;
    description: string;
  };
  availability: AvailableNight[];
};

type AirbnbList = Record<string, Airbnb>;

export const mData: AirbnbList = data;

console.log(mData);
