const animalModel = require("./animals.model");
const { NotFound } = require('../../common/exeptions/index');

class AnimalService {
    async findMany(){
        return animalModel.findAll();
    }

    async findOneById(id) {
        const animal = await animalModel.findOne({ where: { id } });

        if (!animal) {
            throw new NotFound('Animal is not found');
        }

        return animal;
    }

    async paginatedPage(page, limit){
        return animalModel.findAll({offset: page, limit});
    }
}

const animalService = new AnimalService();
module.exports = animalService;
