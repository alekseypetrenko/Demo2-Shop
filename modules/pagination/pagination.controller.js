const animalsService = require("../animals/animals.service");

const limit = 5 // shows animals on the page by default

class PaginationController {
   
    // GET http://localhost:3000/page/2/?&search=beagle&filter=cat

    // async pagination(req, res, next){
    //     try {
    //         const offset = (req.params.id - 1) * limit;

    //         const data = await animalsService.paginatedPage(offset, limit)
    //         res.json(data)
    //         next()
    //     } catch (error) {
    //         next(error)
    //     }
    // }

    async searchAndFilter(req, res, next){
        let {search, filter} = req.query;

        try {
            const offset = (req.params.id - 1) * limit;
            const data = animalsService.searchAndFilter(offset, limit, search, filter)
            res.json(data);
            next()
        } catch (error) {
            next(error);
        }
    }
}

const paginationController = new PaginationController();
module.exports = paginationController;