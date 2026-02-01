import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { WritingCard } from '../WritingCard'

describe('WritingCard', () => {
  it('renders the section title', () => {
    render(<WritingCard />)
    expect(screen.getAllByText('Writing & Teaching')[0]).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<WritingCard />)
    expect(screen.getByText(/Sharing practical strategies/i)).toBeInTheDocument()
  })

  it('renders FreeCodeCamp badge', () => {
    render(<WritingCard />)
    expect(screen.getByText('FreeCodeCamp')).toBeInTheDocument()
    expect(screen.getByText('Technical Articles')).toBeInTheDocument()
  })

  it('renders Hashnode badge', () => {
    render(<WritingCard />)
    expect(screen.getByText('Hashnode')).toBeInTheDocument()
    expect(screen.getByText('Real-World Insights')).toBeInTheDocument()
  })

  it('renders both platform badges side by side', () => {
    const { container } = render(<WritingCard />)
    const badgesContainer = container.querySelector('[class*="flex gap-3"]')
    expect(badgesContainer).toBeInTheDocument()
  })
})
