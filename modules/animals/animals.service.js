const AnimalsModel = require("./animals.model");
const { NotFound } = require('../../common/exeptions/index');

class AnimalsService {
    async findMany(){
        return AnimalsModel.findAll();
    }

    async findOneById(id) {
        const animal = await AnimalsModel.findOne({ where: { id } });

        if (!animal) {
            throw new NotFound('Animal is not found');
        }

        return animal;
    }

    async markAnimalAsSold(animalId, transaction) {
        await AnimalsModel.update({sold: true}, { where: {id: animalId}, transaction});
    }

    async paginatedPage(page, limit){
        return AnimalsModel.findAll({offset: page, limit});
    }
}

const animalsService = new AnimalsService();
module.exports = animalsService;
