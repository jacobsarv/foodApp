import { Module } from "@nestjs/common";
import { IngredientModuleBase } from "./base/ingredient.module.base";
import { IngredientService } from "./ingredient.service";
import { IngredientController } from "./ingredient.controller";

@Module({
  imports: [IngredientModuleBase],
  controllers: [IngredientController],
  providers: [IngredientService],
  exports: [IngredientService],
})
export class IngredientModule {}
