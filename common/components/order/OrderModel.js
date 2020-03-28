export class OrderModel {
    constructor() {
        this.order = JSON.parse(localStorage.getItem('order')) || [];
        this.regex = {
            name: /^[A-Za-z]{3,12}$/, //3-12 characters: letters
            email: /^([A-Za-z\d\.-]+)@([A-Za-z\d-]+)\.([a-z]{2,8})$/, //letters, digits, dots, hyphens
            phone: /^\+38\d{3}\d{7}$/, //+380665781212
        }
    }

    validate(input) {
        input.map(el => {
            return this.regex[el.name].test(el.value) ? el.className = 'valid' : el.className = 'invalid';
        })
    }

    saveOrder(data) {
        this.order.push(data);
        localStorage.setItem('order', JSON.stringify(this.order));
      }
    
    
}