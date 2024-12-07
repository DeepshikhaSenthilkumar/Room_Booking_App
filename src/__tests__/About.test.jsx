import { render, screen } from '@testing-library/react'
import About from '../components/About.jsx'
import '@testing-library/jest-dom'

describe('About Component', () => {
  beforeEach(() => {
    render(<About />)
  })

  it('should load About', () => {
    const aboutElement = screen.getByText('About Us')
    expect(aboutElement).toBeInTheDocument()
  })

  it('should have txt by id ', () => {
    const aboutElement = screen.getByTestId('test')
    expect(aboutElement).toBeInTheDocument()
    expect(aboutElement).toHaveTextContent(
      'Welcome to our hotel booking application. We offer the best rooms in the city.'
    )
  })
})
