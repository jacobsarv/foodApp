import { OrderUpdateManyWithoutRecipesInput } from "./OrderUpdateManyWithoutRecipesInput";

export type RecipeUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderUpdateManyWithoutRecipesInput;
  phone?: string | null;
};
