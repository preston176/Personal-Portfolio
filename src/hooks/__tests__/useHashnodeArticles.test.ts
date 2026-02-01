import { renderHook, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useHashnodeArticles } from '../useHashnodeArticles'
import { getHashnodeArticles } from '@/lib/hashnode'

vi.mock('@/lib/hashnode')

describe('useHashnodeArticles', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns loading state initially', () => {
    vi.mocked(getHashnodeArticles).mockImplementation(() => new Promise(() => {}))

    const { result } = renderHook(() => useHashnodeArticles('test.hashnode.dev', 3))

    expect(result.current.loading).toBe(true)
    expect(result.current.articles).toEqual([])
    expect(result.current.error).toBeNull()
  })

  it('fetches and returns articles on success', async () => {
    const mockArticles = [
      { id: '1', title: 'Test Article', brief: 'Brief', url: 'https://test.com' }
    ]
    vi.mocked(getHashnodeArticles).mockResolvedValue(mockArticles)

    const { result } = renderHook(() => useHashnodeArticles('test.hashnode.dev', 3))

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.articles).toEqual(mockArticles)
    expect(result.current.error).toBeNull()
    expect(getHashnodeArticles).toHaveBeenCalledWith('test.hashnode.dev', 3)
  })

  it('handles errors gracefully', async () => {
    const errorMessage = 'API Error'
    vi.mocked(getHashnodeArticles).mockRejectedValue(new Error(errorMessage))

    const { result } = renderHook(() => useHashnodeArticles('test.hashnode.dev', 3))

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.articles).toEqual([])
    expect(result.current.error).toBe(errorMessage)
  })

  it('handles non-Error exceptions', async () => {
    vi.mocked(getHashnodeArticles).mockRejectedValue('String error')

    const { result } = renderHook(() => useHashnodeArticles('test.hashnode.dev', 3))

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.articles).toEqual([])
    expect(result.current.error).toBe('Failed to fetch articles')
  })

  it('refetches when hostname changes', async () => {
    const mockArticles1 = [{ id: '1', title: 'Article 1' }]
    const mockArticles2 = [{ id: '2', title: 'Article 2' }]

    vi.mocked(getHashnodeArticles)
      .mockResolvedValueOnce(mockArticles1)
      .mockResolvedValueOnce(mockArticles2)

    const { result, rerender } = renderHook(
      ({ hostname }) => useHashnodeArticles(hostname, 3),
      { initialProps: { hostname: 'test1.hashnode.dev' } }
    )

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })
    expect(result.current.articles).toEqual(mockArticles1)

    rerender({ hostname: 'test2.hashnode.dev' })

    await waitFor(() => {
      expect(result.current.articles).toEqual(mockArticles2)
    })

    expect(getHashnodeArticles).toHaveBeenCalledTimes(2)
  })
})
