/* eslint-disable */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'

import RestaurantCard from '../components/RestaurantCard'

afterEach(cleanup)

describe('RecipeCard', () => {

  const fakeRestaurant = {
    "blurhash": "UUKJMXv|x]oz0gtRM{V@AHRQwvxZXSs9s;o0",
    "city": "Helsinki",
    "currency": "EUR",
    "delivery_price": 390,
    "description": "Asenneburgeri",
    "image": "https://prod-wolt-venue-images-cdn.wolt.com/5b348b31fe8992000bbec771/2be8c7738b220df2f9a0974da5c90d90",
    "location": [
      24.941325187683105,
      60.169938852212965
    ],
    "name": "Social Burgerjoint Citycenter",
    "online": false,
    "tags": [
        "hamburger",
        "fries"
    ]
  }

  test('renders title', () => {
      const component = render(
        <RestaurantCard restaurant={fakeRestaurant} />
      )

      const title = component.container.querySelector('.card-text')
      expect(title).toHaveTextContent(
        'Social Burgerjoint Citycenter'
      )
      expect(title).not.toHaveTextContent(
        'test'
      )
  })

  test('renders tags', () => {
    const component = render(
      <RestaurantCard restaurant={fakeRestaurant} />
    )

    const tags = component.container.querySelector('.tags')
    expect(tags).toHaveTextContent(
      'hamburgerfries'
    )
    expect(tags).not.toHaveTextContent(
      'test'
    )
  })

})
