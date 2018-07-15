const { Given, When, Then } = require('cucumber')
const PlaceOrderRequest = require('support/requests/customer-api/place_order')
const { expect } = require('chai')

Given('Customer places order using offer from deliverer {string} with quantity {string}',
  async function (deliverer, quantity) {

  const offerId = this.delivererOfferMap[deliverer]
  const request = new PlaceOrderRequest.Builder()
    .withOfferId(offerId)
    .withQuantity(quantity)
    .build()
  await this.send(request)
});

When('Customer send request to place an order', async function () {
  const request = new PlaceOrderRequest.Builder()
    .build()
  await this.send(request)
})

Then('Customer should receive an order with non empty id', function () {
  expect(this.lastResponse.data.id).not.to.be.undefined
})

Then('Customer should receive an order with total {string}', function (total) {
  expect(this.lastResponse.data.total).to.equal(Number.parseFloat(total))
})
