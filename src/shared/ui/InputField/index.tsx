import { InputHTMLAttributes, forwardRef } from 'react'

import { FieldError } from 'react-hook-form'

import styles from './InputField.module.scss'

interface IInputField {
  label: string
  placeholder: string
  helperText?: string | undefined
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IInputField

export interface IField extends TypeInputPropsField {}

export const Field = forwardRef<HTMLInputElement, IField>(
  ({ placeholder, helperText, label, type = 'text', style, ...rest }, ref) => {
    return (
      <div className={styles.wrapper} style={style}>
        <label>{label}</label>
        <input ref={ref} type={type} {...rest} placeholder={placeholder} />
        {helperText && <div>{helperText}</div>}
      </div>
    )
  }
)
