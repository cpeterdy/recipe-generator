function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "3oe1c54adcb9b00207cc24fbt2d43a1d";
  let prompt = `User instructions are to generate a recipe using ${instructionsInput.value}`;
  let context =
    "You are a food expert and chef. Your mission is to generate a delicious recipe for people cooking at home in basic HTML. The recipe should be easy to follow. Include the ingredients, steps to follow and cook time. Make sure to follow the user instructions submitted. Do not tell me that the recipe is in HTML. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
