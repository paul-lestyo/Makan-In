import RestaurantSource from '../data/restaurant-source';
import { updateCustomersReviewsTemplate } from '../views/templates/template-creator';

const FormInitiator = {
  async init({ formContainer }) {
    this._formContainer = formContainer;
    formContainer.submit.addEventListener('click', (event) => {
      this._sendReview(event);
    });
  },

  async _sendReview(event) {
    event.stopPropagation();
    const dataReview = {
      id: this._formContainer.id.value,
      name: this._formContainer.name.value,
      review: this._formContainer.review.value,
    };
    try {
      const restaurant = await RestaurantSource.sendReview(dataReview);
      this._updateReviews(restaurant);
      this._formContainer.reset();
    } catch (error) {
      console.log(error);
      alert('Failed to Send Review');
    }
  },

  _updateReviews(restaurant) {
    const customersReview = document.querySelector('#reviews');
    customersReview.innerHTML += updateCustomersReviewsTemplate(restaurant.pop());
  },

};

export default FormInitiator;
