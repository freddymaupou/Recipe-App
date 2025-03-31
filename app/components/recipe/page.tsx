import Image from "next/image";
import { recipeInfos } from "./information";

export default function Recipe(recipeInformations: recipeInfos) {
  return (
    <>
      <div className="flex flex-row justify-evenly items-center">
        <Image src="globe.svg" alt="recipe" width={300} height={300}/>
        <div className="flex flex-col items-start justify-evenly w-[500]">
          <div className="flex flex-row items-center justify-between w-[100%]">
            <h1>{recipeInformations.title}</h1>
            <p className="text-[30px]">{recipeInformations.persons + " persons"}</p>
          </div>

          <span className="italic">{"Preparation Time: " + recipeInformations.prepTime + " - " + "Cooking Time: " + recipeInformations.cookingTime}</span><br />

          <ol>
            {recipeInformations.steps.map((step: string, index: number) => {
              return (
                  <li key={index}>{step}</li>
                )
            })}
          </ol>
        </div>
      </div>
    </>
  );
}