import React, { FC } from 'react'

import { FormState, UseFormRegister } from 'react-hook-form'

import { validEmail, validPassword } from './regex'

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
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: validEmail,
            message: 'Email is invalid ',
          },
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
            message: 'Minimum number of characters 6',
          },
          pattern: {
            value: validPassword,
            message:
              'Password must contain a-z, A-Z, ! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [  ] ^ _` { | } ~ ',
          },
        })}
        label="Password"
        placeholder="Password"
        helperText={errors.password?.message?.toString()}
      ></PasswordField>
    </>
  )
}
