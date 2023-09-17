import { FC } from 'react'

import Link from 'next/link'

import styles from './SideBar.module.scss'

import {
  CreateIcon,
  FavoritesIcon,
  HomeIcon,
  LogOutIcon,
  MessengerIcon,
  ProfileIcon,
  SearchIcon,
  StatsIcon,
} from '@/shared/assets'

export const SideBar: FC = () => {
  return (
    <div className={styles.main}>
      <div>
        <ul className={styles.ul}>
          <li className="">
            <Link legacyBehavior href="/">
              <a>
                <HomeIcon className=" h-6 w-6 fill-current" />
                <span>Home</span>
              </a>
            </Link>
          </li>
          <li className="">
            <Link legacyBehavior href="/create">
              <a>
                <CreateIcon className=" h-6 w-6 fill-current" />
                <span>Create</span>
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/profile">
              <a>
                <ProfileIcon className=" h-6 w-6 fill-current" />
                <span>My Profile</span>
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/messenger">
              <a>
                <MessengerIcon className=" h-6 w-6 fill-current" />
                <span>Messenger</span>
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/search">
              <a>
                <SearchIcon className=" h-6 w-6 fill-current" />
                <span>Search</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className={styles.ul}>
          <li>
            <Link legacyBehavior href="/statistics">
              <a>
                <StatsIcon className=" h-6 w-6 fill-current" />
                <span>Statistics</span>
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/favorites">
              <a>
                <FavoritesIcon className=" h-6 w-6 fill-current" />
                <span>Favorites</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className={styles.ul}>
          <li>
            <Link legacyBehavior href="/logout">
              <a>
                <LogOutIcon className=" h-6 w-6 fill-current" />
                <span>Log Out</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
