import React from "react";
import Ingredients from "./Ingredient";

export default function IngredientsList({list}){
    return (
        <ul className="ingredient">
            {
                list.map((ingredient,i)=>(
                    <Ingredient key={i} {...ingredient}/>
                ))
            }
        </ul>
    )

}