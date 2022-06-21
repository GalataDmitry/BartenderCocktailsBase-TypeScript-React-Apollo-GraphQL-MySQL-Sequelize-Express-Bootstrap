import {ArgsType, Field, ID, InputType, ObjectType} from "type-graphql"

@ObjectType()
class VolumeType {
    @Field(type => ID)
    id?: number
    @Field()
    volume?: string
}

@ObjectType()
export class IngredientType {
    @Field(type => ID)
    id?: number
    @Field()
    ing_name?: string
    @Field(type => Date)
    createdAt?: Date
    @Field(type => Date)
    updatedAt?: Date
    @Field(type => [VolumeType])
    Volumes?: VolumeType[]
}

@ObjectType()
class DescriptionType {
    @Field(type => ID)
    id?: number
    @Field()
    cockt_desc?: string
}

@ObjectType()
export class GetAllCocktailsType {
    @Field(type => ID)
    id?: number
    @Field()
    cockt_name!: string
    @Field(type => Date)
    createdAt?: Date
    @Field(type => Date)
    updatedAt?: Date
    @Field(type => DescriptionType)
    Description?: DescriptionType
    @Field(type => [IngredientType])
    Ingredients?: IngredientType[]
}

@ObjectType()
export class CreateCocktailType {
    @Field()
    cockt_name!: string
    @Field(type => [String])
    ing_name!: string[]
    @Field()
    cockt_desc!: string
}

@ArgsType()
@InputType()
export class CreateCocktailInputType {
    @Field()
    cockt_name!: string
    @Field(type => [String])
    ing_name!: string[]
    @Field()
    cockt_desc!: string
}