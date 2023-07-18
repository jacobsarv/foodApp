import { Recipe } from "../recipe/Recipe";
import { Product } from "../product/Product";

export type Order = {
  createdAt: Date;
  customer?: Recipe | null;
  discount: number | null;
  id: string;
  product?: Product | null;
  quantity: number | null;
  totalPrice: number | null;
  updatedAt: Date;
};
