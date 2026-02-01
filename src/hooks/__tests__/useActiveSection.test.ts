import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { useActiveSection } from '../useActiveSection'

describe('useActiveSection', () => {
  beforeEach(() => {
    // Reset scroll position
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 0,
    })

    // Clear any existing sections
    document.body.innerHTML = ''
  })

  afterEach(() => {
    vi.clearAllMocks()
    document.body.innerHTML = ''
  })

  it('returns empty string when no sections exist', () => {
    const { result } = renderHook(() => useActiveSection(['section1', 'section2']))
    expect(result.current).toBe('')
  })

  it('detects the first section when at top of page', () => {
    // Create test sections
    const section1 = document.createElement('section')
    section1.id = 'section1'
    Object.defineProperty(section1, 'offsetTop', { value: 0, writable: true })
    Object.defineProperty(section1, 'offsetHeight', { value: 500, writable: true })

    const section2 = document.createElement('section')
    section2.id = 'section2'
    Object.defineProperty(section2, 'offsetTop', { value: 500, writable: true })
    Object.defineProperty(section2, 'offsetHeight', { value: 500, writable: true })

    document.body.appendChild(section1)
    document.body.appendChild(section2)

    const { result } = renderHook(() => useActiveSection(['section1', 'section2']))

    expect(result.current).toBe('section1')
  })

  it('updates active section on scroll', () => {
    // Create test sections
    const section1 = document.createElement('section')
    section1.id = 'section1'
    Object.defineProperty(section1, 'offsetTop', { value: 0, writable: true })
    Object.defineProperty(section1, 'offsetHeight', { value: 500, writable: true })

    const section2 = document.createElement('section')
    section2.id = 'section2'
    Object.defineProperty(section2, 'offsetTop', { value: 500, writable: true })
    Object.defineProperty(section2, 'offsetHeight', { value: 500, writable: true })

    document.body.appendChild(section1)
    document.body.appendChild(section2)

    const { result } = renderHook(() => useActiveSection(['section1', 'section2']))

    expect(result.current).toBe('section1')

    // Scroll to section 2 (scrollY + 100 offset = 600, which is > 500)
    act(() => {
      Object.defineProperty(window, 'scrollY', {
        writable: true,
        configurable: true,
        value: 500,
      })
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current).toBe('section2')
  })

  it('handles multiple sections correctly', () => {
    const sections = [
      { id: 'home', offsetTop: 0, offsetHeight: 300 },
      { id: 'about', offsetTop: 300, offsetHeight: 400 },
      { id: 'projects', offsetTop: 700, offsetHeight: 500 },
      { id: 'contact', offsetTop: 1200, offsetHeight: 300 },
    ]

    sections.forEach(({ id, offsetTop, offsetHeight }) => {
      const section = document.createElement('section')
      section.id = id
      Object.defineProperty(section, 'offsetTop', { value: offsetTop, writable: true })
      Object.defineProperty(section, 'offsetHeight', { value: offsetHeight, writable: true })
      document.body.appendChild(section)
    })

    const { result } = renderHook(() =>
      useActiveSection(['home', 'about', 'projects', 'contact'])
    )

    // Initially at home
    expect(result.current).toBe('home')

    // Scroll to about section (scrollY + 100 = 300)
    act(() => {
      Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 200 })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current).toBe('about')

    // Scroll to projects section (scrollY + 100 = 700)
    act(() => {
      Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 600 })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current).toBe('projects')

    // Scroll to contact section (scrollY + 100 = 1200)
    act(() => {
      Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 1100 })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current).toBe('contact')
  })

  it('cleans up event listener on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')

    const section1 = document.createElement('section')
    section1.id = 'section1'
    document.body.appendChild(section1)

    const { unmount } = renderHook(() => useActiveSection(['section1']))

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
