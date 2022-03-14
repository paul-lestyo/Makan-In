const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#mainContent');
  I.see('Data Not Found', '.empty-data h1');
});

Scenario('liking one restaurant then unlike that', async ({ I }) => {
  I.see('Data Not Found', '.empty-data h1');

  I.amOnPage('/');
  I.seeElement('.card .title a');
  const firstRestaurant = locate('.card .title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedRestaurantTitle = await I.grabTextFrom('.card .title a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#mainContent');
  I.see('Data Not Found', '.empty-data h1');
});

Scenario('Review one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.card .title a');
  I.click(locate('.card .title a').first());

  const randomText = Math.random().toString(36).substring(5);
  const inputName = `randomName ${randomText}`;
  const inputReview = `randomReview ${randomText}`;

  I.fillField('Masukkan Nama Anda', inputName);
  I.fillField('Masukkan Review Anda', inputReview);
  I.click('Kirim');
  I.wait(3);

  const newReviewName = locate('.review .name-reviewer').last();
  const newReviewComment = locate('.review .comment p').last();

  const textNewReviewName = await I.grabTextFrom(newReviewName);
  const textNewReviewComment = await I.grabTextFrom(newReviewComment);

  assert.strictEqual(inputName, textNewReviewName);
  assert.strictEqual(inputReview, textNewReviewComment);
});
