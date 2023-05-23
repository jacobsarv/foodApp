/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { RecipeWhereUniqueInput } from "./RecipeWhereUniqueInput";
import { RecipeUpdateInput } from "./RecipeUpdateInput";

@ArgsType()
class UpdateRecipeArgs {
  @Field(() => RecipeWhereUniqueInput, { nullable: false })
  where!: RecipeWhereUniqueInput;
  @Field(() => RecipeUpdateInput, { nullable: false })
  data!: RecipeUpdateInput;
}

export { UpdateRecipeArgs as UpdateRecipeArgs };
