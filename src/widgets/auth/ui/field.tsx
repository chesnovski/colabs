import React, { FC, forwardRef } from 'react'

import { IField } from './field.interface'

export const Field = forwardRef<HTMLInputElement, IField>(
  ({ placeholder, helperText, type = 'text', style, ...rest }, ref) => {
    return (
      <div className="my-2" style={style}>
        <label>
          <span className="px-2">{placeholder}</span>
          <input ref={ref} type={type} {...rest} className="border outline-red-400" />
        </label>
        {helperText && <div>{helperText}</div>}
      </div>
    )
  }
)
