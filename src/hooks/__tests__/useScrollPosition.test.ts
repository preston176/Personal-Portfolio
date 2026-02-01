import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { useScrollPosition } from '../useScrollPosition'

describe('useScrollPosition', () => {
  beforeEach(() => {
    // Reset scroll position
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 0,
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('returns initial scroll position', () => {
    const { result } = renderHook(() => useScrollPosition())
    expect(result.current).toBe(0)
  })

  it('updates scroll position on scroll event', () => {
    const { result } = renderHook(() => useScrollPosition())

    act(() => {
      Object.defineProperty(window, 'scrollY', {
        writable: true,
        configurable: true,
        value: 100,
      })
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current).toBe(100)
  })

  it('updates multiple times as user scrolls', () => {
    const { result } = renderHook(() => useScrollPosition())

    act(() => {
      Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 50 })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current).toBe(50)

    act(() => {
      Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 200 })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current).toBe(200)

    act(() => {
      Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 0 })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current).toBe(0)
  })

  it('cleans up event listener on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = renderHook(() => useScrollPosition())

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
