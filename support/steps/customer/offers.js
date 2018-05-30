const { Given, When, Then } = require('cucumber')
const OffersRequest = require('support/requests/customer-api/offers')
const { expect } = require('chai')
const R = require('ramda')

When('I send request to get offers', async function () {
  const request = new OffersRequest.Builder()
    .build()
  await this.send(request)
})

Then('I should receive at least one offer', function () {
  expect(this.lastResponse.data).not.to.be.empty
});

Then('all offers should have an id', function () {
  const offersWithNoId = R.filter(o => !o.id, this.lastResponse.data)
  expect(offersWithNoId).to.be.empty
})

Then('all offers should have a price', function () {
  const offersWithNoPrice = R.filter(o => !o.price, this.lastResponse.data)
  expect(offersWithNoPrice).to.be.empty
})
