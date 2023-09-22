import { FC, useState } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import { AuthField } from './AuthField'

interface IAuthInput {
  username: string
  email: string
  password: string
}

export const Auth: FC = () => {
  const [type, setType] = useState<'login' | 'register'>('login')

  const {
    register: registerInput,
    handleSubmit,
    formState,
    reset,
  } = useForm<IAuthInput>({
    mode: 'onChange',
  })

  const login = () => {}
  const register = () => {}

  const onSubmit: SubmitHandler<IAuthInput> = data => {
    if (type === 'login') login(data)
    else if (type === 'register') register(data)

    reset()
  }

  return (
    <section className="flex justify-center items-center h-screen">
      <form className="border-2 px-8 py-8">
        <AuthField formState={formState} register={registerInput} isPasswordRequired />
        <div className="flex flex-col justify-center items-center">
          <div>
            <button type="submit" onClick={() => setType('register')}>
              Sign Up
            </button>
          </div>
          <span>Do you have an account?</span>
          <div>
            <span>Sign In</span>
          </div>
        </div>
      </form>
    </section>
  )
}
