import { SearchFilterView } from "./SearchFilterView.js";

export class SearchFilterController {
    constructor({ notify }) {
        this.view = new SearchFilterView(this.handleSearch, this.handleFilter);
        this.notify = notify;
    }

    handleSearch = () => {//search animals by breed
        const data = this.view.searchValue;
        this.notify("search", data);//notify AnimalController about changes
    }

    handleFilter = (el) => {// filter animals by species
        const data = el.target.id;
        this.notify("filter", data);//notify AnimalController about changes
    }
}