import { AnimalView } from "./AnimalView.js";
import { AnimalModel } from "./AnimalModel.js";

export class AnimalController {
    constructor({ subscribe, notify }) {
        this.view = new AnimalView(this.handleClickDetails, this.handleAddToCart);
        this.model = new AnimalModel(this.handleLoadedAnimals);
        this.model.getAnimals();

        this.subscribe = subscribe;
        this.subscribe("search", this.search);//subcribe for event from SearchFilterController and get str for search by breed
        this.subscribe("filter", this.filter);//subcribe for event from SearchFilterController 
        this.subscribe("sort", this.sort);//subcribe for event from SortController
        this.subscribe("pagination", this.pagination);//subcribe for event from PaginationController

        this.notify = notify;
     
    }

    handleLoadedAnimals = (arr) => {// render all animals
        this.view.renderAnimals(arr);
    }

    search = (str) => {// search animals by breed
        this.model.currentSearched = str;
        this.view.renderAnimals(this.model.allFilters());
    }

    filter = (id) => {// filter animals by species
        this.model.currentFiltered = id;
        this.view.renderAnimals(this.model.allFilters());
    }

    sort = (id) => {// sort animals by price and age (ascending and descending)
        this.model.currentSorted = id;
        this.view.renderAnimals(this.model.allFilters());
    }

    pagination = (where) => {// page pagination
        const data = this.model.getPaginationData(where);
        this.view.renderAnimals(data);
    }

    handleClickDetails = (id) => {// for "Details" btn
        const data = this.model.getAnimalId(id);
        this.notify("show-details", data);
    }

    handleAddToCart = (id) => {// for "Add to cart" btn
        const data = this.model.getAnimalId(id);
        this.notify('add-to-cart', data);
    }

}