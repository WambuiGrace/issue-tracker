'use client';

import React from 'react'
import Link from 'next/link'
import { GiAlienBug } from "react-icons/gi";
import { usePathname } from 'next/navigation';
import classnames from 'classnames';

const NavBar = () => {
  const currentPath = usePathname();
  

    const links = [
        {label: 'Dashboard', href: '/'},
        {label: 'Issues', href: '/issues'}
    ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        {/* Logo icon from react icons */}
        <Link href="/"><GiAlienBug /></Link>
        <ul className="flex space-x-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link className={classnames({ "nav-link": true, "text-zinc-900": link.href === currentPath,})} href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
    </nav>
  )
}

export default NavBar

