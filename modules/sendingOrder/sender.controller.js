const http = require('request');
const { telegram } = require('../../config');

class SendEmail {

    async sendEmailMy(data) {

        let customer = data[0].customer;
        console.log(customer);

        let items = data[0].items[0]
        console.log(items);

        let message = `
            ${JSON.stringify(customer)}
            **You arstre recieved a new order**
                1. <p>Phone
                2. Name
                3. Products
                4. Price
        `

        http.post(`https://api.telegram.org/bot${telegram.token}/sendMessage?chat_id=${telegram.chat}&parse_mode=markdown&text=${message}`, (err, res, body) => {
            if (err) {
                return err;
            }
        })

    }
}

const senderController = new SendEmail();
module.exports = senderController;