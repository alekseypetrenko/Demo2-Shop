const CustomersModel = require('./customer.model');

class CustomersService {

    async createOne(customerData, transaction) {
        const customer = new CustomersModel(customerData);
        return customer.save({ transaction });
    }
}

module.exports = new CustomersService();