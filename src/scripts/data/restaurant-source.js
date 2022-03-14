import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async Home() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async sendReview(dataReview) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '12345',
      },
      body: JSON.stringify(dataReview),
    });
    const responseJson = await response.json();
    return responseJson.customerReviews;
  }
}

export default RestaurantSource;
