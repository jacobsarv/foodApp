/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { RecipeWhereUniqueInput } from "../../recipe/base/RecipeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class RecipeUpdateManyWithoutIngredientsInput {
  @Field(() => [RecipeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RecipeWhereUniqueInput],
  })
  connect?: Array<RecipeWhereUniqueInput>;

  @Field(() => [RecipeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RecipeWhereUniqueInput],
  })
  disconnect?: Array<RecipeWhereUniqueInput>;

  @Field(() => [RecipeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RecipeWhereUniqueInput],
  })
  set?: Array<RecipeWhereUniqueInput>;
}

export { RecipeUpdateManyWithoutIngredientsInput as RecipeUpdateManyWithoutIngredientsInput };
