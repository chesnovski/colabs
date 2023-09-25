import { FC } from 'react'

import styles from './ResendVerifLink.module.scss'

import { TimeManagement } from '@/shared/assets'

export const ResendLink: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>Email verification link expired</div>
      <div className="w-80">
        <p className="text-light-100 text-center ">
          Looks like the verification link has expired. Not to worry, we can send the link again
        </p>
      </div>
      <button className="flex justify-center items-center bg-primary-500   font-semibold text-light-100 px-6 py-1.5 rounded  my-2 ">
        Resend verification link
      </button>
      <div>
        <TimeManagement />
      </div>
    </div>
  )
}
