import { DetailsView } from "./DetailsView.js";

export class DetailsController {
    constructor({ subscribe }) {
        this.view = new DetailsView();
        this.subscribe = subscribe;
        this.subscribe("show-details", this.showModal);//subcribe for event from AnimalController
    }

    showModal = (el) => {
        this.view.show(el);
    }

    closeModal = () => {
        this.view.close();
    }

}