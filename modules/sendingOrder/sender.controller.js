const http = require('request');
const { telegram } = require('../../config');

class SendEmail {

    async sendEmailMy(data) {

        console.log(data[0].items);

        let message = `
            **You are recieved a new order**

                1. Price
                2. Phone
                3. Products
        `

        http.post(`https://api.telegram.org/bot${telegram.token}/sendMessage?chat_id=${telegram.chat}&parse_mode=markdown&text=asd`, (err, res, body) => {
            if (err) {
                return err;
            }
        })

    }
}

const senderController = new SendEmail();
module.exports = senderController;