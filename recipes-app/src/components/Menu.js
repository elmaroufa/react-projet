import React from "react";
import Recipe from "./Recipe";

function Menu({recipes}){
    return (
     <article>
         <header><h1>Delicious recipes</h1></header>
         <div className="recipes">
            {recipes.map((recipes, i)=>(<Recipe key={i} {...recipe} />))}
         </div>
     </article>
    );
}
export default Menu;