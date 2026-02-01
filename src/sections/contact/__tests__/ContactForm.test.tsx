import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ContactForm } from '../ContactForm'
import { useForm } from '@formspree/react'

vi.mock('@formspree/react')
vi.mock('react-google-recaptcha', () => {
  const React = require('react')
  const ReCAPTCHA = React.forwardRef((props: any, ref: any) => {
    React.useImperativeHandle(ref, () => ({
      getValue: () => 'mock-recaptcha-token',
      reset: () => {},
    }))
    return <div data-testid="recaptcha-mock">reCAPTCHA</div>
  })
  ReCAPTCHA.displayName = 'ReCAPTCHA'
  return { default: ReCAPTCHA }
})

describe('ContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(useForm).mockReturnValue([
      { submitting: false, succeeded: false, errors: [] as any },
      vi.fn()
    ] as any)
  })

  it('renders all form fields', () => {
    render(<ContactForm />)

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<ContactForm />)

    const submitButton = screen.getByRole('button', { name: /send message/i })
    expect(submitButton).toBeInTheDocument()
  })

  it('shows loading state when submitting', () => {
    vi.mocked(useForm).mockReturnValue([
      { submitting: true, succeeded: false, errors: [] as any },
      vi.fn()
    ] as any)

    render(<ContactForm />)

    expect(screen.getByText('Sending...')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sending/i })).toBeDisabled()
  })

  it('triggers alert when submission succeeds', () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {})

    vi.mocked(useForm).mockReturnValue([
      { submitting: false, succeeded: true, errors: [] as any },
      vi.fn()
    ] as any)

    render(<ContactForm />)

    expect(alertMock).toHaveBeenCalledWith('Message sent successfully!')

    alertMock.mockRestore()
  })

  it('validates required fields', async () => {
    render(<ContactForm />)

    const emailInput = screen.getByPlaceholderText('Email') as HTMLInputElement
    const subjectInput = screen.getByPlaceholderText('Subject') as HTMLInputElement
    const messageInput = screen.getByPlaceholderText('Your Message') as HTMLTextAreaElement

    expect(emailInput.required).toBe(true)
    expect(subjectInput.required).toBe(true)
    expect(messageInput.required).toBe(true)
  })

  it('has correct email input type', () => {
    render(<ContactForm />)

    const emailInput = screen.getByPlaceholderText('Email') as HTMLInputElement
    expect(emailInput.type).toBe('email')
  })

  it('renders reCAPTCHA', () => {
    render(<ContactForm />)
    expect(screen.getByTestId('recaptcha-mock')).toBeInTheDocument()
  })

  it('handles form submission', async () => {
    const mockSubmit = vi.fn()
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {})

    vi.mocked(useForm).mockReturnValue([
      { submitting: false, succeeded: false, errors: [] as any },
      mockSubmit
    ] as any)

    render(<ContactForm />)

    // Fill in form fields
    const emailInput = screen.getByPlaceholderText('Email')
    const subjectInput = screen.getByPlaceholderText('Subject')
    const messageInput = screen.getByPlaceholderText('Your Message')

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(subjectInput, { target: { value: 'Test Subject' } })
    fireEvent.change(messageInput, { target: { value: 'Test message' } })

    const submitButton = screen.getByRole('button', { name: /send message/i })
    fireEvent.click(submitButton)

    // Verify form fields are filled
    expect((emailInput as HTMLInputElement).value).toBe('test@example.com')
    expect((subjectInput as HTMLInputElement).value).toBe('Test Subject')
    expect((messageInput as HTMLTextAreaElement).value).toBe('Test message')

    alertMock.mockRestore()
  })

  it('form has proper structure and styling', () => {
    const { container } = render(<ContactForm />)

    const form = container.querySelector('form')
    expect(form).toBeInTheDocument()
    expect(form?.className).toContain('space-y-6')
  })
})
