const { Given, When, Then } = require('cucumber')
const OrderRequest = require('support/requests/customer-api/order')
const { expect } = require('chai')

When('Customer send request to place an order', async function () {
  const request = new OrderRequest.Builder()
    .build()
  await this.send(request)
})

When('Customer places order using offer from deliverer {string}', async function (deliverer) {
  const offerId = this.delivererOfferMap[deliverer]
  const request = new OrderRequest.Builder()
    .withOfferId(offerId)
    .build()
  await this.send(request)
})

Then('Customer should receive an order id', function () {
  expect(this.lastResponse.data.id).not.to.be.undefined
})