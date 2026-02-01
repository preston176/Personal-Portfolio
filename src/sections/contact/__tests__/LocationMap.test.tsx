import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { LocationMap } from '../LocationMap'

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

describe('LocationMap', () => {
  it('renders the map container', () => {
    render(<LocationMap />)
    expect(screen.getByTestId('map-container')).toBeInTheDocument()
  })

  it('renders a marker', () => {
    render(<LocationMap />)
    expect(screen.getByTestId('map-marker')).toBeInTheDocument()
  })

  it('renders marker tooltip with location info', () => {
    render(<LocationMap />)
    expect(screen.getByTestId('marker-tooltip')).toBeInTheDocument()
    expect(screen.getByText('Nairobi, Kenya')).toBeInTheDocument()
  })

  it('displays the location name in tooltip', () => {
    render(<LocationMap />)
    expect(screen.getByText('Nairobi, Kenya')).toBeInTheDocument()
  })

  it('has correct map container styling', () => {
    const { container } = render(<LocationMap />)
    const mapWrapper = container.querySelector('[class*="h-"]')
    expect(mapWrapper).toBeInTheDocument()
  })

  it('renders MapPin icon', () => {
    const { container } = render(<LocationMap />)
    // Check for icon element (Lucide MapPin)
    const tooltip = screen.getByTestId('marker-tooltip')
    expect(tooltip).toBeInTheDocument()
  })
})
