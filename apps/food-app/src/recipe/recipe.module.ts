import { Module } from "@nestjs/common";
import { RecipeModuleBase } from "./base/recipe.module.base";
import { RecipeService } from "./recipe.service";
import { RecipeController } from "./recipe.controller";

@Module({
  imports: [RecipeModuleBase],
  controllers: [RecipeController],
  providers: [RecipeService],
  exports: [RecipeService],
})
export class RecipeModule {}
