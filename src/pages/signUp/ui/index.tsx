import { FC } from 'react'

import { SignUpWidget } from '@/widgets/signUp'

export const SignUp: FC = () => {
  return (
    <div className="flex justify-center min-h-screen items-center bg-black">
      <SignUpWidget />
    </div>
  )
}
