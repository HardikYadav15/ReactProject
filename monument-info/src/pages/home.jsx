import React from "react";
import MonumentCard from "../components/MonumentCard";

const monuments = [
  {
    title: "Taj Mahal",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
  },
  {
    title: "Eiffel Tower",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
  },
  {
    title: "Statue of Liberty",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg",
  },
  {
    title: "Great Wall of China",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/20090529_Great_Wall_8185.jpg",
  },
  {
    title: "Red Fort",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Delhi_fort.jpg/330px-Delhi_fort.jpg",
  },
];

const asianMonuments = [
  {
    title: "Angkor Wat",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/20171126_Angkor_Wat_4712_DxO.jpg/330px-20171126_Angkor_Wat_4712_DxO.jpg",
  },
  {
    title: "Petra",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Urn_Tomb%2C_Petra_01.jpg/330px-Urn_Tomb%2C_Petra_01.jpg",
  },
  {
    title: "Borobudur",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Pradaksina.jpg/330px-Pradaksina.jpg",
  },
  {
    title: "Taj Mahal",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
  },
  {
    title: "Great Wall of China",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/20090529_Great_Wall_8185.jpg",
  },
];

const europeanMonuments = [
  {
    title: "Eiffel Tower",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
  },
  {
    title: "Colosseum",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/330px-Colosseo_2020.jpg",
  },
  {
    title: "Leaning Tower of Pisa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Italy_-_Pisa_-_Leaning_Tower.jpg/330px-Italy_-_Pisa_-_Leaning_Tower.jpg",
  },
  {
    title: "Stonehenge",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Stonehenge2007_07_30.jpg",
  },
  {
    title: "Acropolis of Athens",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Classic_view_of_Acropolis.jpg/330px-Classic_view_of_Acropolis.jpg",
  },
];

const northAmericanMonuments = [
  {
    title: "Statue of Liberty",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg",
  },
  {
    title: "Chichen Itza",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Chichen_Itza_3.jpg/330px-Chichen_Itza_3.jpg",
  },
  {
    title: "Mount Rushmore",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Mount_Rushmore_detail_view_%28100MP%29.jpg/330px-Mount_Rushmore_detail_view_%28100MP%29.jpg",
  },
  {
    title: "CN Tower",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Toronto_-_ON_-_Toronto_Harbourfront7.jpg/330px-Toronto_-_ON_-_Toronto_Harbourfront7.jpg",
  },
  {
    title: "Golden Gate Bridge",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Golden_Gate_Bridge_as_seen_from_Battery_East.jpg/330px-Golden_Gate_Bridge_as_seen_from_Battery_East.jpg",
  },
];

const southAmericanMonuments = [
  {
    title: "Christ the Redeemer",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/35/Christ_the_Redeemer_1.jpg",
  },
  {
    title: "Machu Picchu",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg",
  },
  {
    title: "Iguazu Falls",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Iguazu_Cataratas2.jpg/330px-Iguazu_Cataratas2.jpg",
  },
  {
    title: "Teatro Colón",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Fachada_del_Teatro_Col%C3%B3n_en_Buenos_Aires%2C_Argentina.jpg/330px-Fachada_del_Teatro_Col%C3%B3n_en_Buenos_Aires%2C_Argentina.jpg",
  },
  {
    title: "La Mano de Punta del Este",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Thehandofpuntadeleste.jpg/330px-Thehandofpuntadeleste.jpg",
  },
];

const africanMonuments = [
  {
    title: "Pyramids of Giza",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg",
  },
  {
    title: "Great Mosque of Djenné",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Djenne_great_mud_mosque.jpg/330px-Djenne_great_mud_mosque.jpg",
  },
  {
    title: "Table Mountain",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Table_Mountain_DanieVDM.jpg/330px-Table_Mountain_DanieVDM.jpg",
  },
  {
    title: "Luxor - Temple",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/75/Luxor_Temple_R03.jpg",
  },
  {
    title: "Victoria Falls",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Cataratas_Victoria%2C_Zambia-Zimbabue%2C_2018-07-27%2C_DD_04.jpg/330px-Cataratas_Victoria%2C_Zambia-Zimbabue%2C_2018-07-27%2C_DD_04.jpg",
  },
];

const antarcticaMonuments = [
  {
    title: "Amundsen–Scott South Pole Station",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Amundsen%E2%80%93Scott_South_Pole_Station_01.jpg/330px-Amundsen%E2%80%93Scott_South_Pole_Station_01.jpg",
  },
  {
    title: "Scott's Hut",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Cape_Evans_Scott%27s_Hut.jpg/330px-Cape_Evans_Scott%27s_Hut.jpg",
  },
  {
    title: "Vernadsky Research Base",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Vernadsky_Station_in_January_2014.JPG/330px-Vernadsky_Station_in_January_2014.JPG",
  },
  {
    title: "Port Lockroy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Port_Lockroy_1962.jpg/330px-Port_Lockroy_1962.jpg",
  },
  {
    title: "Palmer Station",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/EXISTING_CONDITIONS_FOR_PALMER_STATION.png/330px-EXISTING_CONDITIONS_FOR_PALMER_STATION.png",
  },
];

const oceaniaMonuments = [
  {
    title: "Sydney Opera House",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sydney_Australia._%2821339175489%29.jpg/330px-Sydney_Australia._%2821339175489%29.jpg",
  },
  {
    title: "Shrine of Remembrance",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Melbourne_war_memorial.jpg/1280px-Melbourne_war_memorial.jpg",
  },
  {
    title: "Sydney Harbour Bridge",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Sydney_%28AU%29%2C_Harbour_Bridge_--_2019_--_2179.jpg/330px-Sydney_%28AU%29%2C_Harbour_Bridge_--_2019_--_2179.jpg",
  },
  {
    title: "Parliament House, Canberra",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Parliament_House_at_dusk%2C_Canberra_ACT.jpg/330px-Parliament_House_at_dusk%2C_Canberra_ACT.jpg",
  },
  {
    title: "Queen Victoria Building",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Sydney_%28AU%29%2C_Queen_Victoria_Building_--_2019_--_3580.jpg/330px-Sydney_%28AU%29%2C_Queen_Victoria_Building_--_2019_--_3580.jpg",
  },
];


const Home = ({ onCardClick }) => (
  <>
    <h2>Famous Monuments</h2>
    <div className="monument-grid">
      {monuments.map((monument, index) => (
        <MonumentCard
          key={index}
          title={monument.title}
          image={monument.image}
          onClick={() => onCardClick(monument.title)}
        />
      ))}
    </div>

    <h2>Famous Monuments - Asia</h2>
    <div className="monument-grid">
      {asianMonuments.map((monument, index) => (
        <MonumentCard
          key={`Asia-${index}`}
          title={monument.title}
          image={monument.image}
          onClick={() => onCardClick(monument.title)}
        />
      ))}
    </div>

    <h2>Famous Monuments - Europe</h2>
    <div className="monument-grid">
      {europeanMonuments.map((monument, index) => (
        <MonumentCard
          key={`Europe-${index}`}
          title={monument.title}
          image={monument.image}
          onClick={() => onCardClick(monument.title)}
        />
      ))}
    </div>

    <h2>Famous Monuments - North America</h2>
    <div className="monument-grid">
      {northAmericanMonuments.map((monument, index) => (
        <MonumentCard
          key={`Northamerica-${index}`}
          title={monument.title}
          image={monument.image}
          onClick={() => onCardClick(monument.title)}
        />
      ))}
    </div>

    <h2>Famous Monuments - South America</h2>
    <div className="monument-grid">
      {southAmericanMonuments.map((monument, index) => (
        <MonumentCard
          key={`Southamerica-${index}`}
          title={monument.title}
          image={monument.image}
          onClick={() => onCardClick(monument.title)}
        />
      ))}
    </div>

    <h2>Famous Monuments - Africa</h2>
    <div className="monument-grid">
      {africanMonuments.map((monument, index) => (
        <MonumentCard
          key={`Africa-${index}`}
          title={monument.title}
          image={monument.image}
          onClick={() => onCardClick(monument.title)}
        />
      ))}
    </div>

    <h2>Famous Sites - Antarctica</h2>
    <div className="monument-grid">
      {antarcticaMonuments.map((monument, index) => (
        <MonumentCard
          key={`Antartica-${index}`}
          title={monument.title}
          image={monument.image}
          onClick={() => onCardClick(monument.title)}
        />
      ))}
    </div>

    <h2>Famous Monuments - Oceania</h2>
    <div className="monument-grid">
      {oceaniaMonuments.map((monument, index) => (
        <MonumentCard
          key={`Oceania-${index}`}
          title={monument.title}
          image={monument.image}
          onClick={() => onCardClick(monument.title)}
        />
      ))}
    </div>
  </>
);

export default Home;
