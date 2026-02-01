import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ArticlesSection } from '../ArticlesSection'
import { getHashnodeArticles } from '@/lib/hashnode'

vi.mock('@/lib/hashnode')

describe('ArticlesSection', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders section title', () => {
    vi.mocked(getHashnodeArticles).mockResolvedValue([])
    render(<ArticlesSection />)
    expect(screen.getByText('Latest Articles')).toBeInTheDocument()
  })

  it('shows loading state initially', () => {
    vi.mocked(getHashnodeArticles).mockImplementation(() => new Promise(() => {}))
    render(<ArticlesSection />)
    expect(screen.getByText('Loading articles...')).toBeInTheDocument()
  })

  it('shows error message when fetch fails', async () => {
    vi.mocked(getHashnodeArticles).mockRejectedValue(new Error('API Error'))
    render(<ArticlesSection />)

    await waitFor(() => {
      expect(screen.getByText('Failed to load articles. Please try again later.')).toBeInTheDocument()
    })
  })

  it('shows no articles message when empty', async () => {
    vi.mocked(getHashnodeArticles).mockResolvedValue([])
    render(<ArticlesSection />)

    await waitFor(() => {
      expect(screen.getByText('No articles found. Check back soon!')).toBeInTheDocument()
    })
  })

  it('renders articles when fetch succeeds', async () => {
    const mockArticles = [
      {
        id: '1',
        title: 'Test Article 1',
        brief: 'Brief 1',
        coverImage: { url: 'https://example.com/1.jpg' },
        url: 'https://example.com/article1',
        publishedAt: '2024-01-01'
      },
      {
        id: '2',
        title: 'Test Article 2',
        brief: 'Brief 2',
        coverImage: { url: 'https://example.com/2.jpg' },
        url: 'https://example.com/article2',
        publishedAt: '2024-01-02'
      }
    ]
    vi.mocked(getHashnodeArticles).mockResolvedValue(mockArticles)

    render(<ArticlesSection />)

    await waitFor(() => {
      expect(screen.getByText('Test Article 1')).toBeInTheDocument()
      expect(screen.getByText('Test Article 2')).toBeInTheDocument()
    })
  })

  it('renders Read More buttons', () => {
    vi.mocked(getHashnodeArticles).mockResolvedValue([])
    render(<ArticlesSection />)

    expect(screen.getByText('Read More on Hashnode')).toBeInTheDocument()
    expect(screen.getByText('Read More on FreeCodeCamp')).toBeInTheDocument()
  })

  it('has correct links for Read More buttons', () => {
    vi.mocked(getHashnodeArticles).mockResolvedValue([])
    render(<ArticlesSection />)

    const hashnodeLink = screen.getByText('Read More on Hashnode').closest('a')
    const fccLink = screen.getByText('Read More on FreeCodeCamp').closest('a')

    expect(hashnodeLink).toHaveAttribute('href', 'https://codewithpres.hashnode.dev/')
    expect(fccLink).toHaveAttribute('href', 'https://www.freecodecamp.org/news/author/preston176/')
  })
})
