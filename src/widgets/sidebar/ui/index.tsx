import Link from 'next/link'

import styles from './SideBar.module.scss'

export const SideBar = () => {
  return (
    <div className={styles.main}>
      <div>
        <ul className={styles.ul}>
          <li className="">
            <Link legacyBehavior href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="">
            <Link legacyBehavior href="/create">
              <a>Create</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/profile">
              <a>My Profile</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/messenger">
              <a>Messenger</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/search">
              <a>Search</a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link legacyBehavior href="/statistics">
              <a>Statistics</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/favorites">
              <a>Favorites</a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link legacyBehavior href="/logout">
              <a>Log out</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
