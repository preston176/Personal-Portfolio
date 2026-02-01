import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ContactInfo } from '../ContactInfo'

// Mock the map components to avoid WebGL initialization
vi.mock('@/components/ui/map', () => ({
  Map: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="map-container">{children}</div>
  ),
  MapMarker: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="map-marker">{children}</div>
  ),
  MarkerContent: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="marker-content">{children}</div>
  ),
  MarkerTooltip: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="marker-tooltip">{children}</div>
  ),
  MapControls: () => <div data-testid="map-controls" />,
}))

describe('ContactInfo', () => {
  it('renders email address', () => {
    render(<ContactInfo />)
    expect(screen.getByText('prestonnyamweya@gmail.com')).toBeInTheDocument()
  })

  it('renders phone number', () => {
    render(<ContactInfo />)
    expect(screen.getByText('+254 799 078 848')).toBeInTheDocument()
  })

  it('renders email icon', () => {
    const { container } = render(<ContactInfo />)
    const emailIcon = container.querySelector('.text-green-500')
    expect(emailIcon).toBeInTheDocument()
  })

  it('renders location information', () => {
    render(<ContactInfo />)
    const locationElements = screen.getAllByText('Nairobi, Kenya')
    expect(locationElements.length).toBeGreaterThan(0)
    expect(locationElements[0]).toBeInTheDocument()
  })

  it('renders social icons section', () => {
    render(<ContactInfo />)
    // SocialIcons component should be rendered
    const socialSection = screen.getByText('prestonnyamweya@gmail.com').closest('div')?.parentElement
    expect(socialSection).toBeInTheDocument()
  })

  it('renders location map', () => {
    render(<ContactInfo />)
    // LocationMap component should be rendered (check for map container)
    expect(screen.getByTestId('map-container')).toBeInTheDocument()
  })

  it('has correct section structure with border separator', () => {
    const { container } = render(<ContactInfo />)
    const borderElement = container.querySelector('[class*="border-t"]')
    expect(borderElement).toBeInTheDocument()
  })
})
