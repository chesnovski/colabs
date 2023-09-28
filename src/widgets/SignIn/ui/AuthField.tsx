import React, { FC } from 'react'

import { FormState, UseFormRegister } from 'react-hook-form'

import { Field, PasswordField } from '@/shared'

interface IAuthFields {
  register: UseFormRegister<any>
  formState: FormState<any>
  isPasswordRequired?: boolean
}

export const AuthField: FC<IAuthFields> = ({
  register,
  formState: { errors },
  isPasswordRequired = false,
}) => {
  return (
    <>
      <Field
        {...register('Email', {
          required: 'Email is required',
        })}
        label="Email"
        placeholder="Email"
        // error={errors.password}
        helperText={errors.email?.message?.toString()}
      ></Field>

      <PasswordField
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Please enter a valid password',
          },
        })}
        label="Password"
        placeholder="Password"
        helperText={errors.password?.message?.toString()}
      ></PasswordField>
    </>
  )
}
