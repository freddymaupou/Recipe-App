import { MongoClient } from 'mongodb';
import Form from 'next/form'
import { env } from 'process';

export default function AddRecipe(){
    const addNewRecipe = async (formData: FormData) => {
        'use server'
        // connect to db
        const databaseURI = env.MONGODB_URI || "";
        const client = new MongoClient(databaseURI);
        
        try {
            await client.connect();
            const database = client.db("RecipeInformations");
            // add the recipe to the db

            // check if every data isn't empty
            // parse steps
            await database.collection("informations").insertOne({
                title: formData.get("title"),
                persons: Number(formData.get("persons")),
                prepTime: formData.get("prep_time"),
                cookingTime: formData.get("cooking_time"),
                ingredients: formData.get("ingredients"),
                steps: formData.get("steps")
            })

        } catch(e){
            console.error(e);
        } finally {
            await client.close();
        }
    }

    return (
        <Form action={addNewRecipe}>
            <div className="flex flex-row flex-wrap items-center justify-evenly">
                <label>Titre : 
                    <input type="text" name="title"/>
                </label>
                <label>Nombre de personnes : 
                    <input type="text" name="persons"/>
                </label>
                <label>Temps de préparation : 
                    <input type="text" name="prep_time"/>
                </label>
                <label>Temps de cuisson : 
                    <input type="text" name="cooking_time"/>
                </label>
                <label>Ingrédients : 
                    <input type="text" name="ingredients"/>
                </label>
                <label>Étapes : 
                    <input type="text" name="steps"/>
                </label>
            <button className="cursor-pointer" type="submit">Ajouter une nouvelle recette</button>
            </div>
        </Form>
    )
}

