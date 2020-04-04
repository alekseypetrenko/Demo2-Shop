const animalsService = require("../animals/animals.service");

const limit = 12; // shows animals on the page by default

class PaginationController {

    async searchAndFilter(req, res, next) {

        let { breed, species, sorted } = req.query;
        try {
            const offset = (req.params.id - 1) * limit;

            const data = await animalsService.searchAndFilter(offset, limit, species, breed, sorted);

            res.send(data);
        } catch (error) {
            next(error);
        }
    }
}

const paginationController = new PaginationController();
module.exports = paginationController;