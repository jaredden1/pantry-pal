const axios = require("axios");
const API_KEY = process.env.API_KEY;

module.exports = {
  search,
  getrecipebyid,
};

// Search function for API
async function search(req, res) {
  const ingredients = req.body.ingredients;
  const apiKey = API_KEY;
  const number = 32; // Set your desired number of recipes here
  const limitLicense = true;
  const ranking = 1;
  const ignorePantry = true;

  const options = {
    method: "GET",
    url: `https://api.spoonacular.com/recipes/findByIngredients`,
    params: {
      apiKey,
      ingredients,
      number,
      limitLicense,
      ranking,
      ignorePantry,
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  try {
    const response = await axios.request(options);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getrecipebyid(req, res) {
  console.log("getting recipe by id");
  const apiKey = API_KEY;
  const id = req.params.id;
  console.log(id);
  const recipeInfo = {
    method: "GET",
    url: `https://api.spoonacular.com/recipes/${id}/information`,
    params: {
      apiKey,
      id,
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  try {
    const response1 = await axios.request(recipeInfo);
    console.log(response1, "im getting 1");
    const response = [response1.data];
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
