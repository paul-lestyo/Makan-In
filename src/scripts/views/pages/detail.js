import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate, createNoInternetItemTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FormInitiator from '../../utils/form-initiator';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

const Detail = {
  async render() {
    return `
	<div class="loader loader-detail"></div>
	<div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const loader = document.querySelector('.loader');
    const restaurantContainer = document.querySelector('#mainContent');
    try {
      const restaurant = await RestaurantSource.detailRestaurant(url.id);
      loader.remove();

      restaurantContainer.innerHTML += createRestaurantDetailTemplate(restaurant);

      FormInitiator.init({ formContainer: document.reviewForm });

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurant: FavoriteRestaurantIdb,
        restaurant,
      });
    } catch (error) {
      console.log(error);
      loader.remove();
      restaurantContainer.innerHTML = createNoInternetItemTemplate();
    }
  },
};

export default Detail;
