"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = {
    up(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.createTable('CocktailsIngredients', {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                cocktId: {
                    allowNull: false,
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Cocktails',
                        key: 'id'
                    },
                },
                ingId: {
                    allowNull: false,
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Ingredients',
                        key: 'id'
                    },
                }
            });
        });
    },
    down(queryInterface) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.dropTable('CocktailsIngredients');
        });
    }
};
//# sourceMappingURL=20220611100241-create-cocktails-ingredients.js.map