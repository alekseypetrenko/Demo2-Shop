export class OrderHistoryModel {
    constructor() {
        this.orderHistory = JSON.parse(localStorage.getItem('order')) || [];
    }

    get orders() {
        return JSON.parse(localStorage.getItem('order')) || [];
    }

    get orderCounter() {
        return this.orderHistory.length;
    }

    removeFromOrderHistory(name) {// remove 1 order from orderHistory
        this.orderHistory = this.orderHistory.filter(el => el.name !== name);
        localStorage.setItem('order', JSON.stringify(this.orderHistory));
        return this.orderHistory;
    }

    calcTotalPrice() {// calculate total price og items in cart
        const price = JSON.parse(localStorage.getItem('order'));
        return price.reduce((total, current) => total + current.totalPrice, 0);
    }
}