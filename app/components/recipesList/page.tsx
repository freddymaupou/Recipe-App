import { allRecipes } from "@/lib/data";
import { recipeInfos } from "../recipe/information";
import Recipe from "../recipe/page";

export default function RecipesList(){
    return (
        <div>
        {allRecipes.map((recipe: recipeInfos, index: number) => {
            return (
              <Recipe key={index} recipeInformations={recipe}/>
            )
          })}
        </div>
    )
}