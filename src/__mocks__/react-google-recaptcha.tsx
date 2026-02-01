import React, { forwardRef } from 'react'

const ReCAPTCHA = forwardRef((props: any, ref: any) => {
  React.useImperativeHandle(ref, () => ({
    getValue: () => 'mock-recaptcha-token',
    reset: () => {},
  }))
  return <div data-testid="recaptcha-mock">reCAPTCHA</div>
})

ReCAPTCHA.displayName = 'ReCAPTCHA'
export default ReCAPTCHA
