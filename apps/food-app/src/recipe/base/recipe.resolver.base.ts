/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateRecipeArgs } from "./CreateRecipeArgs";
import { UpdateRecipeArgs } from "./UpdateRecipeArgs";
import { DeleteRecipeArgs } from "./DeleteRecipeArgs";
import { RecipeCountArgs } from "./RecipeCountArgs";
import { RecipeFindManyArgs } from "./RecipeFindManyArgs";
import { RecipeFindUniqueArgs } from "./RecipeFindUniqueArgs";
import { Recipe } from "./Recipe";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { RecipeService } from "../recipe.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Recipe)
export class RecipeResolverBase {
  constructor(
    protected readonly service: RecipeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "read",
    possession: "any",
  })
  async _recipesMeta(
    @graphql.Args() args: RecipeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Recipe])
  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "read",
    possession: "any",
  })
  async recipes(@graphql.Args() args: RecipeFindManyArgs): Promise<Recipe[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Recipe, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "read",
    possession: "own",
  })
  async recipe(
    @graphql.Args() args: RecipeFindUniqueArgs
  ): Promise<Recipe | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Recipe)
  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "create",
    possession: "any",
  })
  async createRecipe(@graphql.Args() args: CreateRecipeArgs): Promise<Recipe> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Recipe)
  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "update",
    possession: "any",
  })
  async updateRecipe(
    @graphql.Args() args: UpdateRecipeArgs
  ): Promise<Recipe | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Recipe)
  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "delete",
    possession: "any",
  })
  async deleteRecipe(
    @graphql.Args() args: DeleteRecipeArgs
  ): Promise<Recipe | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Order], { name: "orders" })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async resolveFieldOrders(
    @graphql.Parent() parent: Recipe,
    @graphql.Args() args: OrderFindManyArgs
  ): Promise<Order[]> {
    const results = await this.service.findOrders(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
