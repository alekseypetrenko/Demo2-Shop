const animalsService = require("./animals.service.js")

class AnimalController {
    async findMany(req, res, next){
        try {
            const animals = await animalsService.findMany();
            res.json(animals);
        } catch (error) {
            next(e);
        }
    }

    async findOneById(req, res, next){
        try {

            const animal = await animalsService.findOneById(req.params.id);
            res.json([animal]);
        } catch (error) {
            next(e);
        }
    }

    
}

const animalController = new AnimalController();
module.exports = animalController;