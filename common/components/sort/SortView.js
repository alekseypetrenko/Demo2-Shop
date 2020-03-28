export class SortView {
    constructor(listener) {
        this.dropdown = document.querySelectorAll(".dropdown-item");
        this.dropdown.forEach(el => el.addEventListener("click", listener));
    }
}