import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Favorites from '../Favorites'

test('first test', async () => {
  // ARRANGE
  render(<Favorites />)

  // ACT
  await screen.findAllByRole('heading')

  // ASSERT
  expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Favorites')
})
