import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.css";
import DrinkDetails from "./drinkDetails";
const cocktailsName = [
  "Mojito",
  "Old Fashioned",
  "Long Island Tea",
  "Negroni",
  "Whiskey Sour",
  "Dry Martini",
  "Daiquiri",
  "Margarita",
];
// const cocktailsImages = [
//   "https://thumbs.dreamstime.com/b/mojito-cocktail-fresh-lime-mint-dark-background-109553462.jpg",
//   "https://www.mashed.com/img/gallery/classic-old-fashioned-cocktail-recipe/l-intro-1654018390.jpg",
// ];
const Shop = () => {
  const [cocktails, setCocktails] = useState([]);
  const navigate = useNavigate();

  const fetchdrinks = (CocktailsName) => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${CocktailsName}`
      )
      .then((res) => {
        setCocktails(res.data.drinks);
        console.log(res.data.drinks);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  return (
    <div className="cocktails-main-container">
      {cocktails?.map((cocktails, id) => {
        return (
          <div className="cocktails-small-container">
            <div className="cocktails-image">
              <img
                onClick={() => {
                  navigate(`${cocktails.idDrink}`);
                }}
                key={id}
                src={cocktails.strDrinkThumb}
              />
            </div>
            <div className="cocktails-details"></div>
          </div>
        );
      })}

      {cocktailsName.map((name, id) => {
        return (
          <div className="cocktail-button">
            <button
              key={id}
              onClick={() => {
                fetchdrinks(name.toLowerCase());
              }}
            >
              {name}
            </button>
          </div>
        );
      })}
      {/* <div>
        {cocktailsImages.map((img) => {
          return (
            <div>
              <img src={img}></img>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Shop;
