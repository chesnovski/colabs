import Link from 'next/link'

export const SideBar = () => {
  return (
    <div className="w-2/12  text-gray-400 border-r border-gray-400 flex  justify-center items-center">
      <ul>
        <li>
          <Link legacyBehavior href="/create">
            <a>Create</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/favorites">
            <a>Favorites</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/messenger">
            <a>Messenger</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
