Feature: Order Placement

Background:
  Given Deliverer 'D1' registers with phone number '6483516383' and password 'secret1'
  And Deliverer 'D1' logs in with phone number '6483516383' and password 'secret1'
  And Deliverer 'D1' adds a new offer for product 'CORN_TORTILLA'

Scenario: Place an order successfully
  Given Customer sends request to get offers for product 'CORN_TORTILLA'
  When Customer places order using offer from deliverer 'D1'
