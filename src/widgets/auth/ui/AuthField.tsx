import React, { FC } from 'react'

import { FormState, UseFormRegister } from 'react-hook-form'

import { Field } from './field'

interface IAuthFields {
  register: UseFormRegister<any>
  formState: FormState<any>
  isPasswordRequired?: boolean
}

export const AuthField: FC<IAuthFields> = ({
  register,
  formState: { errors },
  isPasswordRequired,
}) => {
  return (
    <Field
      {...register('password', {
        required: 'Password is required',
        minLength: {
          value: 6,
          message: 'Please enter a valid password',
        },
      })}
      placeholder="Password"
      type="password"
      error={errors.message}
    ></Field>
  )
  
}
