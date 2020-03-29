const animalModel = require("./animals.model");

class AnimalService {
    async findMany(){
        return animalModel.findAll();
    }

    async findOneById(id) {
        const animal = await animalModel.findOne({ where: { id } });

        if (!animal) {
            throw new Error('animal not found');
        }

        return animal;
    }
}

const animalService = new AnimalService();
module.exports = animalService;