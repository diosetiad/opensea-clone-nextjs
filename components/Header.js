import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import openseaLogo from '../assets/opensea.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'

const style = {
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white my-3 md:my-0 font-semibold text-2xl`,
  searchBar: `hidden md:flex flex-1 my-3 md:my-0 md:ml-4 w-[65%] md:max-w-[768px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: `md:flex items-center`,
  headerItem: `text-white py-3 md:py-0 md:px-4 lg:px-6 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
  headerIcon: `text-[#8a939b] text-3xl font-black py-3 md:py-0 md:px-4 lg:px-6 hover:text-white cursor-pointer`,
}

const Header = () => {
  let [open, setOpen] = useState(false)
  return (
    <div className=" top-0 left-0 w-full shadow-md">
      <div className="justify-between bg-[#04111d] px-8 py-4 md:flex md:items-center">
        <Link href="/">
          <div className={style.logoContainer}>
            <Image src={openseaLogo} width={40} height={40} />
            <div className={style.logoText}>Opensea</div>
          </div>
        </Link>
        <div className={style.searchBar}>
          <div className={style.searchIcon}>
            <AiOutlineSearch />
          </div>
          <input
            className={style.searchInput}
            placeholder="Search items, collections, and accounts"
          />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-7 cursor-pointer text-4xl text-white md:hidden"
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>
        <div
          className={`pointer-events-auto absolute left-0 z-10 w-full bg-[#04111d] pb-9 pl-9 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
            open ? 'top-20' : 'top-[-490px]'
          }`}
        >
          <div className="my-3 flex w-[65%] flex-1 items-center rounded-[0.8rem] bg-[#363840] hover:bg-[#4c505c] md:my-0 md:ml-4 md:hidden md:max-w-[768px]">
            <div className={style.searchIcon}>
              <AiOutlineSearch />
            </div>
            <input
              className={style.searchInput}
              placeholder="Search items, collections, and accounts"
            />
          </div>
          <div className={style.headerItems}>
            <Link href="/collections/0x2245f8985Ef9b54a20F8c65b901ffB7d1086490B">
              <div className={style.headerItem}> Explore </div>
            </Link>
            <div className={style.headerItem}> Stats </div>
            <div className={style.headerItem}> Resources </div>
            <div className={style.headerItem}> Create </div>
            <div className={style.headerIcon}>
              <CgProfile />
            </div>
            <div className={style.headerIcon}>
              <MdOutlineAccountBalanceWallet />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
