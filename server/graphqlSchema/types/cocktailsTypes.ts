import {ArgsType, Field, ID, InputType, ObjectType} from "type-graphql"

@ObjectType()
class IngsVolsType {
    @Field(type => ID)
    id?: number
    @Field(type => ID)
    ingId?: number
    @Field(type => ID)
    volId?: number
}
@ObjectType()
class CocktsIngsType {
    @Field(type => ID)
    id?: number
    @Field(type => ID)
    cocktId?: number
    @Field(type => ID)
    ingId?: number
}

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

@InputType()
export class CocktNameDesc {
    @Field()
    cockt_name!: string
    @Field()
    cockt_desc!: string
}

@InputType()
export class CocktIngs {
    @Field()
    ing_name!: string
    @Field()
    volume!: string
}

@InputType()
export class CreateCocktailType {
    @Field(type => CocktNameDesc)
    cocktNameDesc!: CocktNameDesc
    @Field(type => [CocktIngs])
    cocktIngs!: CocktIngs[]

}

@ArgsType()
@InputType()
export class CreateCocktailInputType {
    @Field(type => [CreateCocktailType])
    cocktData?: CreateCocktailType[]
}