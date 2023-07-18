import { OrderCreateNestedManyWithoutRecipesInput } from "./OrderCreateNestedManyWithoutRecipesInput";

export type RecipeCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderCreateNestedManyWithoutRecipesInput;
  phone?: string | null;
};
