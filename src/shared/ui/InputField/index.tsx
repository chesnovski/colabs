import { InputHTMLAttributes, forwardRef } from 'react'

import { default as cn } from 'classnames'
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
        <div className={helperText ? '' : 'mb-4'}>
          <input
            autoComplete="off"
            ref={ref}
            type={type}
            {...rest}
            placeholder={placeholder}
            className={cn(styles.input, helperText ? 'border-red-500' : 'border-dark-100 ')}
          />
        </div>

        {helperText && <div className="max-w-[330px] text-red-500 text-sm">{helperText}</div>}
      </div>
    )
  }
)
