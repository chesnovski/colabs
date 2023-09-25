import { FC } from 'react'

import { SignInWidget } from '@/widgets/SignIn'

export const SignIn: FC = () => {
  return (
    <div className="flex justify-center min-h-screen items-center bg-dark-700">
      <SignInWidget />
    </div>
  )
}
