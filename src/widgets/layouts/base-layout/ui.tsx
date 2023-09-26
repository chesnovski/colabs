import { FC, ReactElement, ReactNode } from 'react'

import { Header } from '../../../widgets/header'
import { SideBar } from '../../../widgets/sidebar'

type Props = {
  children: ReactNode
}

export const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="relative flex flex-grow">
        <SideBar />
        <div className="w-full flex ">
          <div className="px-4 py-2  text-gray-400">{children}</div>
        </div>
      </div>
    </div>
  )
}

export const getBaseLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>
}
