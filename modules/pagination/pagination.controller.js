const animalModel = require("../animals/animals.model");
const animalService = require("../animals/animals.service");

class Paginator {

    async pagination(req, res, next) {
        try {           
            const page = parseInt(req.query.page);
            const limit = parseInt(req.query.limit);

            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;

            //console.log(req.query);
            

            const results = await animalService.paginatedPage(page, limit);
            console.log(results);
            

            // if (endIndex < data.length) {
            //     results.next = {
            //         page: page + 1,
            //         limit: limit
            //     }
            // }

            // if (startIndex > 0) {
            //     results.prev = {
            //         page: page - 1,
            //         limit: limit
            //     }
            // }
            //results.results = data.slice(startIndex, endIndex)
            res.json(results);
            next();
        }
        catch (error) {
            next(error)
        }

    }
}

const pagination = new Paginator();

module.exports = pagination;