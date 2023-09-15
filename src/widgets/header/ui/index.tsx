import Link from 'next/link'

export const Header = () => {
  return (
    <h1 className="h-16 px-4 py-2 flex justify-between border-b border-gray-500 items-center  text-4xl text-gray-400">
      <Link legacyBehavior href="/">
        <a>Colabs</a>
      </Link>
    </h1>
  )
}
