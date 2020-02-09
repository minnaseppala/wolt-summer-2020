/* eslint-disable */
import '@testing-library/jest-dom/extend-expect'
import { cleanup } from '@testing-library/react'

import alphabeticalCompare from '../common/utils'

afterEach(cleanup)

describe('alphabeticalCompare', () => {
  const fakeRestaurantArray = [{"name": "b"}, {"name": "c"}, {"name": "a"}, {"name": "c"}];

  test('sorts correctly', () => {
    const correct = [{"name": "a"}, {"name": "b"}, {"name": "c"}, {"name": "c"}];
    const unsorted = [...fakeRestaurantArray];
    const sorted = fakeRestaurantArray.sort(alphabeticalCompare);
    
    expect(sorted).toMatchObject(correct);
    expect(sorted).not.toMatchObject(unsorted);
  })
})
