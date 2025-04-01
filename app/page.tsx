import RecipesList from "./components/recipesList/page";
import AddRecipe from "./components/addRecipe/page";

export default function Home() {
  return (
    <>
      <AddRecipe/> {/* client */}
      <RecipesList/> {/* server */}
    </>
  );
}