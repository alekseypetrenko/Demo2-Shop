export class AnimalModel {
    link = "data/data.json";
    animals = [];
    currentAnimals = [];
    currentFiltered;// for filter func receives id from controller
    currentSorted;// for sort func receives id from controller
    currentSearched;// for search func receives str from controller
    paginationCount = 12;
    paginationPage = 1;

    constructor(handleLoad) {
        this.handleLoad = handleLoad;
    }

    getAnimals() {// load data from JSON
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("load", () => {
            const animals = JSON.parse(xhr.responseText);
            this.animals = animals.map(el => {
                const age = this.convertDate(el);
                return {
                    ...el,
                    age
                }
            });
            this.currentAnimals = this.animals;
            this.handleLoad(this.getPaginationData());

        })
        xhr.open("GET", this.link);
        xhr.send();
    }

    convertDate(el) {// convert date for animals' age
        const diff = Date.now() - el.birth_date;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const yearsAge = Math.floor(days / 365);
        const monthsAge = Math.floor((days % 365) / 30);
        const daysAge = Math.floor((days % 365) - monthsAge * 30);

        return {
            yearsAge, monthsAge, daysAge
        }
    }

    filterBySpecies() {
        if (!this.currentFiltered) return;// stop func if no currentFiltered
        if (this.currentFiltered.toLowerCase() === "clear") {
            this.currentAnimals = this.animals;
        }

        else if (this.currentFiltered.toLowerCase() === "all") {
            this.currentAnimals = this.animals;
        } else {
            this.currentAnimals = this.animals.filter(({ species }) => species.toLowerCase() === this.currentFiltered.toLowerCase());
        }

        return this.currentAnimals;
    }

    searchByBreed() {
        if (!this.currentSearched) return;// stop func if no currentSearched
        const reg = new RegExp(this.currentSearched, "i");
        this.currentAnimals = this.currentAnimals.filter(({ breed }) => reg.test(breed));
        return this.currentAnimals;
    }

    sortByType() {
        if (!this.currentSorted) return;//stop func if no currentSorted
        if (this.currentSorted === "price ascending") {
            this.currentAnimals = this.currentAnimals.sort((a, b) => a.price - b.price);
        }
        if (this.currentSorted === "price descending") {
            this.currentAnimals = this.currentAnimals.sort((a, b) => b.price - a.price);
        }
        if (this.currentSorted === "age ascending") {
            this.currentAnimals = this.currentAnimals.sort((a, b) => b.birth_date - a.birth_date);
        }
        if (this.currentSorted === "age descending") {
            this.currentAnimals = this.currentAnimals.sort((a, b) => a.birth_date - b.birth_date);
        }
        return this.currentAnimals;
    }

    allFilters() {// use all types of filters + pagination
        this.currentAnimals = this.animals;
        this.filterBySpecies();
        this.searchByBreed();
        this.sortByType();
        return this.getPaginationData();
    }

    getPaginationData(where) {
        switch (where) {
            case 'next': {
                this.paginationPage = this.currentAnimals.length / this.paginationCount > this.paginationPage ? this.paginationPage + 1 : 1;
                break;
            }
            case 'prev': {
                this.paginationPage = this.paginationPage == 1 ? Math.ceil(this.currentAnimals.length / this.paginationCount) : this.paginationPage - 1;
                break;
            }
            default: {
                this.paginationPage = 1;
            }
        }

        const from = (this.paginationPage - 1) * this.paginationCount;
        const to = this.paginationPage * this.paginationCount;
        return this.currentAnimals.slice(from, to);
    }

    getAnimalId(id) {// for "Details" and "Add to cart" btn
        return this.currentAnimals.find(el => el.id === +id);
    }

}