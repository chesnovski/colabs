import { FC, useState } from 'react'

import Link from 'next/link'
import { FormState, SubmitHandler, UseFormRegister, useForm } from 'react-hook-form'

import { AuthField } from './AuthField'
import styles from './SignIn.module.scss'

import { Field, PasswordField } from '@/shared'
import { GihubIcon, GoogleIcon } from '@/shared/assets'

export interface IAuthFields {
  register: UseFormRegister<any>
  formState: FormState<any>
  isPasswordRequired?: boolean
}

export interface IAuthInput {
  username: string
  email: string
  password: string
}

export const {
  register: registerInput,
  handleSubmit,
  formState,
  reset,
} = useForm<IAuthInput>({
  mode: 'onBlur',
  reValidateMode: 'onBlur',
})

export const login = (data: any) => {
  console.log(data)
}

export const [type, setType] = useState<'login' | 'register'>('login')

export const onSubmit: SubmitHandler<IAuthInput> = data => {
  type === 'login' && login(data)
  // else if (type === 'register') register(data)

  reset()
}
