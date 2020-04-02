const AnimalsModel = require("./animals.model");
const { NotFound } = require('../../common/exeptions/index');

class AnimalsService {
	async findMany(query) {
		return AnimalsModel.findAll(query);
	}

	async findOneById(id) {
		const animal = await AnimalsModel.findOne({ where: { id } });

		if (!animal) {
			throw new NotFound('Animal is not found');
		}

		return animal;
	}

	async markAnimalAsSold(animalId, transaction) {
		await AnimalsModel.update({ sold: true }, { where: { id: animalId }, transaction });
	}

	async searchAndFilter(offset, limit, species, breed, sorted) {
		let obj = {}
		if (sorted === undefined) {
			sorted = "price:desc";
		}
		if (species === undefined) {
			obj = { breed }
		}
		if (breed === undefined) {
			obj = { species }
		}
		if (breed === undefined && species === undefined) {
			obj = {};
		}
		let order = sorted.split(":");

		return AnimalsModel.findAll({
			where: obj,
			order: [[order[0], order[1]]],
			offset,
			limit
		})
	}
}

const animalsService = new AnimalsService();
module.exports = animalsService;
