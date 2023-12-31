import React, { FC, InputHTMLAttributes } from 'react'

import { FieldError } from 'react-hook-form'

export interface IFieldProps {
  placeholder: string
  helperText?: string | undefined
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputPropsField {}
