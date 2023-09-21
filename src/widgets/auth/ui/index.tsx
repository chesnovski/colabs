import { FC, useState } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

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
    <section>
      <form>
        <div>
          <button type="submit" onClick={() => setType('register')}>
            Sign Up
          </button>
        </div>
        <span>Do you have an account?</span>
        <div>
          <span>Sign In</span>
        </div>
      </form>
    </section>
  )
}
