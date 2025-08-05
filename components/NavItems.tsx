"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navItems = [
    { label: "Home", href: "/" },
    { label: "Companion", href: "/companions" },
    { label: "Profile", href: "/my-journey" },
]

function NavItems() {

    const pathname = usePathname();

    return (
        <nav className='flex items-center gap-4'>
            {
                navItems.map((item) => (
                    <Link href={item.href} className={`${pathname === item.href && "text-primary font-semibold"}`} key={item.label}>{item.label}</Link>
                ))
            }
        </nav>
    )
}

export default NavItems