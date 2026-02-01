import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { TechStackCard } from '../TechStackCard'

describe('TechStackCard', () => {
  it('renders the section title', () => {
    render(<TechStackCard />)
    expect(screen.getByText('Technical Stack')).toBeInTheDocument()
  })

  it('renders all 6 tech stack items', () => {
    render(<TechStackCard />)

    expect(screen.getByText('Next.js')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument()
    expect(screen.getByText('Prisma')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
    expect(screen.getByText('AI/LangChain')).toBeInTheDocument()
  })

  it('renders the philosophy quote', () => {
    render(<TechStackCard />)
    expect(screen.getByText(/The tools are just tools/i)).toBeInTheDocument()
  })

  it('displays tech items in a grid layout', () => {
    const { container } = render(<TechStackCard />)
    const grid = container.querySelector('[class*="grid"]')
    expect(grid).toBeInTheDocument()
    expect(grid?.classList.toString()).toContain('grid-cols-2')
    expect(grid?.classList.toString()).toContain('md:grid-cols-3')
  })
})
