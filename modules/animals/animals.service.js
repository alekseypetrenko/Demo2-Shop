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
}

const animalService = new AnimalService();
module.exports = animalService;
