const animalsModel = require("./animals.model");
const { NotFound } = require('../../common/exeptions/index');

class AnimalsService {
    async findMany() {
        return animalsModel.findAll();
    }

    async findOneById(id) {
        const animal = await animalsModel.findOne({ where: { id } });

        if (!animal) {
            throw new NotFound('Animal is not found');
        }

        return animal;
    }

    async paginatedPage(offset, limit) {
        return animalsModel.findAll({ offset, limit });
    }

    async searchAndFilter(offset, limit, search, filter){
        return animalsModel.findAndCountAll({
            where: {
                //breed: search || "",
                species: filter || ""
            },
            offset,
            limit,
            //order: [`"${sort.name}", "${sort.direction}"`]
            //order: [['price', 'DESC']]

        })
    }
}

const animalsService = new AnimalsService();
module.exports = animalsService;
