import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from 'axios';

const DrinkDetails = ()=> {
    const {idDrink} = useParams()
    const [drink, setDrink]= useState({})
    
    
    
    useEffect(()=> {
        axios.get (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
        .then((res)=>{
            setDrink(res.data.drinks)})
        .catch((err)=>{
            console.log("error zaagad bn shde Anaraa haha")
        })
        .finally(()=>{})
    }, [])

    console.log(drink)

    return <div>
        <><h1>DrinkDetails</h1></>
        <div className="drink-detail-small-container">
        <div>{drink[0]?.strDrink}</div>
        <img src={drink[0]?.strDrinkThumb} />
        <div><b>Ingredients:</b></div>
       
        <div>{drink[0]?.strIngredient1}</div>
        <span>{drink[0]?.strMeasure1}</span>
        <div>{drink[0]?.strIngredient2}</div>
        <span>{drink[0]?.strMeasure2}</span>
        <div>{drink[0]?.strIngredient3}</div>
        <span>{drink[0]?.strMeasure3}</span>
        <div>{drink[0]?.strIngredient4}</div>
        <span>{drink[0]?.strMeasure4}</span>
        <div>{drink[0]?.strIngredient5}</div>
        <span>{drink[0]?.strMeasure5}</span>
        <div><b>Instructions:</b></div>
        <div>{drink[0]?.strInstructions}</div>
        <div><b>Glass:</b></div>
        <div>{drink[0]?.strGlass}</div>
        <div><b>Video:</b></div>
        <div>{drink[0]?.strVideo}</div>
    

        </div>
    </div>
}

export default DrinkDetails