import { recipeInfos } from "./components/recipe/information";
import Recipe from "./components/recipe/page";

const recipeTest: recipeInfos = {
  title: "Poulet aux olives",
  persons: 4,
  prepTime: "1h",
  cookingTime: "3h",
  ingredients: undefined,
  steps: ["Laver le poulet", "Le mariner de sauce avec de l'huile d'olive", "Préchauffer le four à 180°C", "Mettre le poulet dans le four pendant 3h", "Servir avec des frites"],
}

export default function Home() {
  return (
    <>
      <Recipe {...recipeTest}/>
    </>
  );
}