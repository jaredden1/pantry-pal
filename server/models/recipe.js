const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    title: { type: String },
    image: { type: String },
    summary: { type: String},
    ingredients: [{type: String}],
    instructions: [{type: String}]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Recipe", recipeSchema);
