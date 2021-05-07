import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from "../DATA.json";

document.querySelector("#menu").addEventListener("click", (e) => {
    document.querySelector("nav").classList.toggle("nav-mobile");
	e.stopPropagation();
});

document.querySelector("body").addEventListener("click", (e) => {
    document.querySelector("nav").classList.remove("nav-mobile");
});


const container = document.querySelector(".container");

let data_html = ``;
data.restaurants.forEach(function(restaurant) {
    data_html += `
            <div class="card">
                <div class="image">
                    <div class="badge">
                        <span>Kota ${restaurant.city}</span>
                    </div>
                    <img src="${restaurant.pictureId}" alt="${restaurant.name}">
                </div>
                <div class="detail">
                    <div class="rating">
                        Rating: ${restaurant.rating}
                    </div>
                    <div class="title">
                        <a href="#">${restaurant.name}</a>
                    </div>
                    <div class="desc">
                        ${restaurant.description}
                    </div>
                </div>
            </div>`;
});

container.innerHTML = data_html
