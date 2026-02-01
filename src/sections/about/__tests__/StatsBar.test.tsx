import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { StatsBar } from '../StatsBar'

describe('StatsBar', () => {
  it('renders all three stat cards', () => {
    const { container } = render(<StatsBar />)
    const statCards = container.querySelectorAll('[class*="grid"] > div')
    expect(statCards).toHaveLength(3)
  })

  it('renders hours saved stat correctly', () => {
    render(<StatsBar />)
    expect(screen.getByText('1,000+')).toBeInTheDocument()
    expect(screen.getByText('Hours Saved')).toBeInTheDocument()
  })

  it('renders cost reduction stat correctly', () => {
    render(<StatsBar />)
    expect(screen.getByText('$50K+')).toBeInTheDocument()
    expect(screen.getByText('Cost Reduction')).toBeInTheDocument()
  })

  it('renders production apps stat correctly', () => {
    render(<StatsBar />)
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('Production Apps')).toBeInTheDocument()
  })

  it('displays stats in correct order', () => {
    render(<StatsBar />)
    const numbers = screen.getAllByText(/1,000\+|\$50K\+|3/)
    expect(numbers[0]).toHaveTextContent('1,000+')
    expect(numbers[1]).toHaveTextContent('$50K+')
    expect(numbers[2]).toHaveTextContent('3')
  })
})
