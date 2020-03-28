import { CartView } from "./CartView.js";
import { CartModel } from "./CartModel.js";

export class CartController {
    constructor({ subscribe, notify }) {
        this.view = new CartView(this.showModal, this.closeModal, this.deleteItem, this.handleOrder);
        this.model = new CartModel();

        this.setCartCounter();

        this.subscribe = subscribe;
        this.subscribe('add-to-cart', this.addAnimalToCart);//subcribe for event from AnimalController and get data for cart render
        this.notify = notify;

    }

    showModal = () => {
        this.view.show(this.model.animalsCart, this.model.calcTotalPrice());
    }

    closeModal = () => {
        this.view.close();
    }

    addAnimalToCart = (animal) => {
        const cart = this.model.addToCart(animal);
        if (cart[1]) {//check if animal has been already added to cart (true status)
            this.view.renderNotification(cart[1]);
        }
        const totalPrice = this.model.calcTotalPrice();
        this.view.renderCart(cart[0], totalPrice);
        this.setCartCounter();
    }

    deleteItem = (id) => {// delete 1 position from cart
        const cart = this.model.removeFromCart(id);
        const totalPrice = this.model.calcTotalPrice();
        this.view.renderCart(cart, totalPrice);
        this.setCartCounter();
    }

    handleOrder = () => {
        this.closeModal();
        const data = this.model.animalsCart;
        const totalPrice = this.model.calcTotalPrice();
        this.notify('order', { data, totalPrice });//notify OrderController about changes
    }

    setCartCounter = () => {//number of elements in cart rendering in navbar
        this.view.renderCartCounter(this.model.cartCounter);
    };
}

