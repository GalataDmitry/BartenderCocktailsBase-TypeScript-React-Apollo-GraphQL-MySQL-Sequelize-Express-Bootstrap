import {Field, ID, ObjectType} from "type-graphql"


@ObjectType()
class CocktailsType {
    @Field(type => ID)
    id?: number
    @Field()
    cockt_name!: string
    @Field(type => Date)
    createdAt?: Date
    @Field(type => Date)
    updatedAt?: Date
}

module.exports = CocktailsType