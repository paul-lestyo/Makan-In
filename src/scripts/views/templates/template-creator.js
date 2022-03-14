import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
	<div class="restaurant detail" style="background-image: url('${CONFIG.LARGE_IMAGE_URL + restaurant.pictureId}');">
	<div class="wrapper-detail">
		<div class="restaurant-img">
			<img id="img-restaurant" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
			<div class="categories">
			<span>Kategori Menu</span>
			<ul>
				${restaurant.categories.map((category) => (`<li>${category.name}</li>`)).join('')}
			</ul>
		</div>
		</div>
		<div class="desc">
			<h1 id="title">${restaurant.name}</h1>
			<h2 id="city">Kota: ${restaurant.city}</h2>
			<h2 id="address">Alamat: ${restaurant.address}</h2>
			<h2 id="rating">Rating : ${restaurant.rating}</h2>
			<h3 id="overview">Description: <br> ${restaurant.description}</h3> 
		</div>

		
	</div>
	</div>

	<div class="more-details">
	<div class="foods">
		<h1>Food</h1>
		<ul>
			${restaurant.menus.foods.map((food) => (`<li>${food.name}</li>`)).join('')}
		</ul>
	</div>
	<div class="drinks">
		<h1>Drinks</h1>
		<ul>
			${restaurant.menus.drinks.map((drink) => (`<li>${drink.name}</li>`)).join('')}
		</ul>
	</div>
	<div class="customer-review">
		<h1>Customers Review</h1>
		<div id="reviews">
		${restaurant.customerReviews.map((reviewer) => (
    `<div class="review">
		<div class="avatar">
			<i class="fa fa-user-circle" aria-hidden="true"></i>
			<span class="name-reviewer">${reviewer.name}</span>
		</div>
		<div class="comment">
			<p>${reviewer.review}</p> <br>
			<span class="date">${reviewer.date}</span>
		</div>
	</div>`
  )).join('')}
  </div>
	<h2>Berikan Komentar Anda</h2>
	<form name="reviewForm" onsubmit="return false;">
		<input type="hidden" name="id" value="${restaurant.id}">
		<input type="text" name="name" placeholder="Masukkan Nama Anda">
		<textarea name="review" row="1" placeholder="Masukkan Review Anda"></textarea>
		<input type="submit" name="submit" value="Kirim">
	</form>
		
	</div>
	</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
			<div class="card">
                <div class="image">
                    <div class="badge">
                        <span>Kota ${restaurant.city}</span>
                    </div>
                    <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
                </div>
                <div class="detail">
                    <div class="rating">
                        Rating: ${restaurant.rating}
                    </div>
                    <div class="title">
                        <a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a>
                    </div>
                    <div class="desc">
                        ${restaurant.description}
                    </div>
                </div>
            </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this Restaurant" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this Restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createEmptyItemTemplate = () => `
	<div class="empty-data">
			<img src="./images/no-data.png" width="200">
			<h1>Data Not Found</h1>
	</div>
`;

const updateCustomersReviewsTemplate = (review) => `
<div class="review">
	<div class="avatar">
		<i class="fa fa-user-circle" aria-hidden="true"></i>
		<span class="name-reviewer">${review.name}</span>
	</div>
	<div class="comment">
		<p>${review.review}</p> <br>
		<span class="date">${review.date}</span>
	</div>
	</div>
`;

const createNoInternetItemTemplate = () => `
	<div class="empty-data no-internet-detail">
		<img src="./images/no-internet.png" width="200">
		<h1>No Internet</h1>
	</div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createEmptyItemTemplate,
  updateCustomersReviewsTemplate,
  createNoInternetItemTemplate,
};
