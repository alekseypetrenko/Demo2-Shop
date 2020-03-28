import { PaginationView } from "./PaginationView.js"

export class PaginationController {
    constructor({ notify }) {
        this.view = new PaginationView(this.handlePagination);
        this.notify = notify;
    }

    handlePagination = (el) => {
        const data = el.target.dataset.id;
        this.notify("pagination", data);//notify AnimalController about changes
    }

}