import { FC } from 'react'

import Link from 'next/link'

import { ChevronDownIcon, NoticeIcon } from '@/shared/assets'

export const Header: FC = () => {
  return (
    <div className="h-16 px-16 py-3 text-light-100 text-3xl border-b border-dark-300 mb-8">
      Colab
    </div>
    // <h1 className="h-16  py-2 px-16 flex justify-between border-b border-gray-500 items-center  text-gray-400">
    //   <div className="text-2xl">
    //     <Link legacyBehavior href="/">
    //       <a>Colabs</a>
    //     </Link>
    //   </div>
    //   <div>
    //     <div className="flex justify-between items-center">
    //       <div className="flex h-8 w-8 relative items-center mx-4">
    //         <span
    //           className="absolute top-0 right-0
    //      h-4 w-4 text-xs text-center bg-gray-400 text-white font-bold rounded-full"
    //         >
    //           0
    //         </span>
    //         <NoticeIcon className="h-6 fill-current" />
    //       </div>
    //       <div>
    //         <button
    //           type="button"
    //           className="inline-flex w-full justify-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    //           id="menu-button"
    //           aria-expanded="true"
    //           aria-haspopup="true"
    //         >
    //           Choose Language
    //           <div>
    //             <ChevronDownIcon className="h-5 w-5  text-gray-400 " />
    //           </div>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </h1>
  )
}
