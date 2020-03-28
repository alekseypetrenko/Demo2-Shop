export class SearchFilterView {
    constructor(listenerSearch, listenerFilter) {
        this.input = document.querySelector(".breed-search");
        this.input.addEventListener("input", listenerSearch);

        this.nav = document.querySelectorAll(".link-species");
        this.nav.forEach(el => el.addEventListener("click", listenerFilter));
    }

    get searchValue() {
        return this.input.value;
    }
}

