import { OrderHistoryView } from "./OrderHistoryView.js"
import { OrderHistoryModel } from "./OrderHistoryModel.js";

export class OrderHistoryController {
    constructor({ subscribe }) {
        this.view = new OrderHistoryView(this.showModal, this.closeModal, this.deleteOrder);
        this.model = new OrderHistoryModel();

        this.subscribe = subscribe;
        this.subscribe('order-history', this.showModal);//subcribe for event from OrderController and get data for orderHistory

        this.setOrderCounter();
    }

    showModal = () => {
        this.view.show(this.model.orders, this.model.calcTotalPrice());
    }

    closeModal = () => {
        this.view.close();
    }

    deleteOrder = (name) => {
        const order = this.model.removeFromOrderHistory(name);
        const totalPrice = this.model.calcTotalPrice();
        this.view.renderOrderHistory(order, totalPrice);
        this.setOrderCounter();
    }

    setOrderCounter = () => {//number of orders in orderHistory rendering in navbar
        this.view.renderOrderHistoryCounter(this.model.orderCounter);
    };
}