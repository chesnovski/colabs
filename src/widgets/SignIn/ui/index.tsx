import { FC, useState } from 'react'

import Link from 'next/link'
import { FormState, SubmitHandler, UseFormRegister, useForm } from 'react-hook-form'

import { AuthField } from './AuthField'
import styles from './SignIn.module.scss'

import { Field, PasswordField } from '@/shared'
import { GihubIcon, GoogleIcon } from '@/shared/assets'

interface IAuthFields {
  register: UseFormRegister<any>
  formState: FormState<any>
  isPasswordRequired?: boolean
}

interface IAuthInput {
  username: string
  email: string
  password: string
}

export const SignInWidget: FC<IAuthFields> = () => {
  const [type, setType] = useState<'login' | 'register'>('login')

  const {
    register: registerInput,
    handleSubmit,
    formState,
    reset,
  } = useForm<IAuthInput>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  })

  const login = (data: any) => {
    console.log(data)
  }
  // const register = (data: any) => {}

  const onSubmit: SubmitHandler<IAuthInput> = data => {
    type === 'login' && login(data)
    // else if (type === 'register') register(data)

    reset()
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>Sign In</div>
      <div className={styles.icon}>
        <a href="">
          <GoogleIcon />
        </a>
        <a href="">
          <GihubIcon className="fill-light-100" />
        </a>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <AuthField formState={formState} register={registerInput} isPasswordRequired />

        <div className="text-sm text-light-900 mt-9 mb-6 text-end">Forgot Password</div>

        <button
          type="submit"
          onClick={() => setType('login')}
          className="block w-full bg-primary-500   font-semibold text-light-100 p-2 rounded  my-2 "
        >
          Sign In
        </button>
        <div className=" text-light-100 text-center">{`Don't have an account?`}</div>
        <Link href={'signup'} legacyBehavior>
          <button className="font-semibold text-primary-500 p-2 bg-transparent w-full">
            Sign Up
          </button>
        </Link>
      </form>
    </div>
  )
}
