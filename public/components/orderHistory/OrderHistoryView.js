export class OrderHistoryView {

    constructor(showListener, closeListener, deleteOrderListener) {
        this.modal = document.querySelector(".orderHistory-modal");
        this.modalTitle = document.querySelector(".modal-title-orderHistory");
        this.modalBody = document.querySelector(".modal-body-orderHistory");
        this.tableBody = document.querySelector(".table-body-orderHistory")

        this.history = document.querySelector(".order-history");
        this.orderCounter = document.querySelector(".order-history-counter");
        this.totalPrice = document.querySelector(".order-history-price");

        this.history.addEventListener("click", showListener);
        this.closeListener = closeListener;
        this.deleteOrderListener = deleteOrderListener;

    }

    show(data, price) {
        this.renderOrderHistory(data, price);
        $(this.modal).modal('show');//bootstrap4 documentation show modal
    }

    close() {
        this.modalTitle.innerHTML = "";
        this.modalBody.innerHTML = "";
        $(this.modal).modal('hide');//bootstrap4 documentation close modal
    }

    renderOrderHistory(data, totalPrice) {// render the whole orderHistory
        this.modalTitle.innerHTML = "HISTORY OF ORDERS";
        this.tableBody.innerHTML = '';
        data.forEach(el => { this.tableBody.appendChild(this.renderSingleOrder(el)) });
        this.renderOrderHistoryCounter(data.length);
        this.renderTotalPrice(totalPrice);
    }

    renderSingleOrder(el) {// render 1 order in orderHistory
        const element = document.createElement('tr');
        element.innerHTML = `
            <td class="w-50"> 
                <span>Name:</span> ${el.name}<br>
                <span>Email:</span> ${el.email}<br>
                <span>Phone:</span>${el.phone}<br>
            </td>
            <td class="w-50"> 
                <span>Breed:</span> ${el.products.map(el => el.breed)}<br>
                <span>Price:</span>${el.totalPrice}
            </td>
            <td>
                <button class="btn-delete-order btn btn-danger text-center" id="${el.name}">X</button>
            </td>
        `;

        element.querySelector(".btn-delete-order").addEventListener("click", ev => {
            ev.preventDefault();
            this.deleteOrderListener(el.name);
        });

        return element;
    }

    renderTotalPrice(price) {// render total price of all orders
        this.totalPrice.innerHTML = `${price} UAH`;
    }

    renderOrderHistoryCounter(num) {// render orderHistory count in navbar
        this.orderCounter.innerHTML = num;
    }
}