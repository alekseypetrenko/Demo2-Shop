export class CartModel {
    constructor() {
        this.animalsCart = JSON.parse(localStorage.getItem("cart")) || [];
    }

    get cartCounter() {
        return this.animalsCart.length;
    }

    addToCart(animal) {// add 1 item to cart
        if (this.animalsCart.find(item => animal.id === item.id)) {//check if animal has been already added to cart (true status)
            return [this.animalsCart, true];
        } else {
            this.animalsCart.push(animal);
            localStorage.setItem("cart", JSON.stringify(this.animalsCart));
            return [this.animalsCart, false];//false status for animals added once
        }
    }

    removeFromCart(id) {// remove 1 item from cart //id
        this.animalsCart = this.animalsCart.filter(animal => animal.id !== parseInt(id));
        localStorage.setItem("cart", JSON.stringify(this.animalsCart));
        return this.animalsCart;
    }

    calcTotalPrice() {// calculate total price og items in cart
        return this.animalsCart.reduce((total, current) => +total + +current.price, 0);
    }

    clearLocalStorage() {//clear storage after making order
        return localStorage.removeItem("cart");
    }
}
