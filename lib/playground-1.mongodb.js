// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
// eslint-disable-next-line react-hooks/rules-of-hooks
use("RecipeInformations");

const infos = db.getCollection("informations")
console.log(infos)