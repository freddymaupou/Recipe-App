import { recipeInfos } from "@/app/components/recipe/information";
import { MongoClient } from "mongodb";
import { env } from "process";

export const allRecipes: recipeInfos[] = []

async function getDatabase() {
    const databaseURI = env.MONGODB_URI || "";
    const client = new MongoClient(databaseURI);

    try {
        await client.connect();
        const database = client.db("RecipeInformations");
        const recipes = await database.collection("informations");
        const cursor = recipes.find();

        // Print a message if no documents were found
        if ((await recipes.countDocuments()) === 0) {
          console.log("No documents found!");
        }
        // Print returned documents
        for await (const doc of cursor) {
            console.log(doc);

            const recipe: recipeInfos = {
                title: doc._title,
                persons: doc._persons,
                prepTime: doc._prepTime,
                cookingTime: doc._cookingTime,
                ingredients: doc._ingredients,
                steps: doc._steps
            }

            allRecipes.push(recipe);
        }
    } catch(e){
        console.error(e)
    } finally {
        await client.close();
    }
}

getDatabase()