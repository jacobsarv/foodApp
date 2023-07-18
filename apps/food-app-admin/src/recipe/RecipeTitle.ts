import { Recipe as TRecipe } from "../api/recipe/Recipe";

export const RECIPE_TITLE_FIELD = "firstName";

export const RecipeTitle = (record: TRecipe): string => {
  return record.firstName || String(record.id);
};
