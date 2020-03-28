export class PaginationView {
    constructor(listener) {
        this.page = document.querySelectorAll(".page-link");
        this.page.forEach(el => el.addEventListener("click", listener));
    }
}