const CustomersModel = require('./customer.model');

class CustomersService {

    async createOne(customerData, transaction) {
        const customer = new CustomersModel(customerData);
    }
}