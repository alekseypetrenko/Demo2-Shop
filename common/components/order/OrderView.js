export class OrderView {
    constructor(showListener, closeListener, listenerInput, listenerHandleOrder) {
        this.modalOrder = document.querySelector(".modal-order");
        this.modalTitleOrder = document.querySelector(".modal-title-order");
        this.modalBodyOrder = document.querySelector(".modal-body-order");
        this.submitBtn = document.querySelector(".btn-submit-order");
        this.inputName = document.querySelector(".inp-order-name");
        this.inputEmail = document.querySelector(".inp-order-email");
        this.inputPhone = document.querySelector(".inp-order-phone");

        this.submitBtn.addEventListener("click", addEventListener("click", ev => {
            ev.preventDefault();
            listenerHandleOrder;
        }));
        this.showListener = showListener;
        this.closeListener = closeListener;

        this.inputName.addEventListener("input", listenerInput);
        this.inputEmail.addEventListener("input", listenerInput);
        this.inputPhone.addEventListener("input", listenerInput);


    }

    show() {
        $(this.modalOrder).modal('show');
    }

    close() {
        this.modalTitleOrder.innerHTML = "";
        this.modalBodyOrder.innerHTML = "";
    }

    get inputsValue() {
        return [
            this.inputName,
            this.inputEmail,
            this.inputPhone
        ]
    }
}