export class AnimalView {
    constructor(listenerDetails, listenerCart) {
        this.info = document.querySelector(".info-animals");
        this.spiner = document.querySelector(".spinner-grow");

        this.clickDetailsListener = listenerDetails;
        this.clickAddToCartListener = listenerCart;
    }

    renderAnimals(arr) {// render all cards
        this.info.innerHTML = '';
        arr.forEach(elem => {
            this.info.appendChild(this.getAnimal(elem));
        });

        this.spiner.classList.add("d-none");
    }

    getAnimal(el) {// render 1 card
        const card = document.createElement("div");
        card.classList.add("card-deck", "col", "mb-4");

        card.innerHTML = `
            <div class="card">
                <img src="${el.image}" alt="Photo" class="center">
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item list-main-render">${el.breed}</li>
                            <li class="list-group-item list-main-render">${el.species} ${el.gender}</li>
                            <li class="list-group-item list-main-render">${this.convertedDOB(el)}</li>
                            <li class="list-group-item list-main-render">Price: ${el.price} UAH</li>
                        </ul>
                        <button type="button" class="btn btn-outline-secondary addto-cart-button data-id=${el.id}">Add to cart</button>
                        <button type="button" class="btn btn-outline-success details-button" data-id="${el.id}">&#128062;Details</button>
                    </div>
            </div>`

        card.querySelector(".details-button").addEventListener("click", ev => {
            ev.preventDefault();
            this.clickDetailsListener(el.id);
        });
        card.querySelector(".addto-cart-button").addEventListener("click", ev => {
            ev.preventDefault();
            this.clickAddToCartListener(el.id);

        });

        return card;
    }

    convertedDOB(el) {// convert date for animals' age
        return `Age: ${el.age.yearsAge < 1 ? "" : el.age.yearsAge + " years "}
                     ${el.age.monthsAge < 1 ? "" : el.age.monthsAge + " month "}
                     ${el.age.daysAge < 1 ? "" : el.age.daysAge + " days"}`
    }

}

