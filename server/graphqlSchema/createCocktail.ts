import {Resolver, Mutation, Args} from "type-graphql"
import {CreateCocktailInputType, GetAllCocktailsType} from './types/cocktailsTypes'

const {Descriptions, Cocktails, Ingredients, CocktailsIngredients, Volumes, IngredientsVolumes} = require('../models')

@Resolver()
export class CreateCocktail {
    @Mutation(returns => [GetAllCocktailsType])
    async createCocktail(@Args() {cocktData}: CreateCocktailInputType) {
        let cockt_name
        let cockt_desc
        cocktData?.map(cockt => {
            cockt_name = cockt.cocktNameDesc.cockt_name
            cockt_desc = cockt.cocktNameDesc.cockt_desc
        })
        try {
            const checkToCocktExist = await Cocktails.findOne({where: {cockt_name}})
            if (!!checkToCocktExist) return [{mess: 'Cockt exist'}]
            const newCockt = await Cocktails.create({cockt_name})
            const cocktId = newCockt.id
            await Descriptions.create({cockt_desc, cocktId})
            const cockIngs = cocktData?.map(e => e.cocktIngs)
            let checkToIngsExist, checkToVolumeExist, ing_name, volume, newIng, newVolume, newIngs = [], newVolumes = []
            for (let i = 0; i <= cockIngs!?.length - 1; i++) {
                for (let j = 0; j <= cockIngs![i].length - 1; j++) {
                    ing_name = cockIngs![i][j].ing_name
                    volume = cockIngs![i][j].volume
                    checkToIngsExist = await Ingredients.findOne({where: {ing_name}})
                    if (!checkToIngsExist) {
                        newIng = await Ingredients.create({ing_name})
                        newIngs.push(newIng.id)
                    } else {
                        newIngs.push(checkToIngsExist.id)
                    }
                    checkToVolumeExist = await Volumes.findOne({where: {volume}})
                    if (!checkToVolumeExist) {
                        newVolume = await Volumes.create({volume})
                        newVolumes.push(newVolume.id)
                    } else {
                        newVolumes.push(checkToVolumeExist.id)
                    }
                }
            }
            console.log('newIngs', newIngs)
            console.log('newVolumes', newVolumes)
            let tmpIngs, tmpVols
            for (let i = 0; i <= newIngs.length - 1; i++) {
                tmpIngs = newIngs[i]
                tmpVols = newVolumes[i]
                await CocktailsIngredients.create({cocktId, ingId: tmpIngs})
                await IngredientsVolumes.create({ingId: tmpIngs, volId: tmpVols})
            }
        } catch (error) {
            console.log(`[---> createCocktails error: ${error}`)
        }
    }
}
