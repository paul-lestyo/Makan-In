import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate, createEmptyItemTemplate, createNoInternetItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
		<div class="jumbotron">
			<h1>Tempat Mencari Restaurant di Berbagai Negara</h1>
			<h2>Pilihlah Restaurant Terbaik Untukmu</h2>
		</div>
		<h1 class="title-main">Explore Restaurant</h1> 
		<div class="container">
			<div class="skeleton"></div>
			<div class="skeleton"></div>
			<div class="skeleton"></div>
			<div class="skeleton"></div>
			<div class="skeleton"></div>
			<div class="skeleton"></div>
		</div>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('.container');
    try {
      const restaurants = await RestaurantSource.Home();
      restaurantsContainer.innerHTML = '';
      if (restaurants.length > 0) {
        restaurants.forEach((restaurant) => {
          restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
      } else {
        restaurantsContainer.innerHTML += createEmptyItemTemplate();
      }
    } catch (error) {
      console.log(error);
      restaurantsContainer.innerHTML = '';
      restaurantsContainer.innerHTML = createNoInternetItemTemplate();
    }
  },
};

export default Home;
