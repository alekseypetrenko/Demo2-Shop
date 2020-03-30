const animalsModel = require("./animals.model");
const { NotFound } = require('../../common/exeptions/index');

class AnimalsService {
    async findMany(){
        return animalsModel.findAll();
    }

    async findOneById(id) {
        const animal = await animalsModel.findOne({ where: { id } });

        if (!animal) {
            throw new NotFound('Animal is not found');
        }

        return animal;
    }

    async paginatedPage(page, limit){
        return animalsModel.findAll({offset: page, limit});
    }
}

const animalsService = new AnimalsService();
module.exports = animalsService;
