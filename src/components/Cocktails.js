import {useEffect} from 'react'
import React, { useState } from 'react';




function Cocktails(){
    const [drinks, setDrinks] = useState([]);
    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
        .then(res=> res.json())
        .then(data => setDrinks(data.drinks))
        .catch(err=>console.log(err))
      },[]);

    return (
        <div>
            
{
    drinks.map(drink=><h1>{drink.strDrink}</h1>)
}
            </div>
    )
}
export default Cocktails