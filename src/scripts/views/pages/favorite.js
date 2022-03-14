import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate, createEmptyItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
		<div class="jumbotron jumbotron-favorite">
			<h1>Favorite Restaurant</h1>
		</div>
		<div class="container">
			<div class="loader"></div>
		</div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const loader = document.querySelector('.loader');
    loader.remove();
    const restaurantContainer = document.querySelector('.container');
    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantContainer.innerHTML += createEmptyItemTemplate();
    }
  },
};

export default Favorite;
