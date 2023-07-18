import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderCreateInput = {
  customer?: RecipeWhereUniqueInput | null;
  discount?: number | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  totalPrice?: number | null;
};
