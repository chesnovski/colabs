import Link from 'next/link'

import { NoticeIcon } from '@/shared/assets'

export const Header = () => {
  return (
    <h1 className="h-16 px-4 py-2 flex justify-between border-b border-gray-500 items-center  text-gray-400">
      <Link legacyBehavior href="/">
        <a className="text-4xl">Colabs</a>
      </Link>
      <div className="flex h-8 w-8 relative items-center ">
        <span
          className="absolute top-0 right-0
         h-4 w-4 text-xs text-center bg-gray-400 text-white font-bold rounded-full"
        >
          0
        </span>
        <NoticeIcon className="h-6 fill-current" />
      </div>
    </h1>
  )
}
