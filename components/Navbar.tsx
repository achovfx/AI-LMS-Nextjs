import { Link } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import NavItems from './NavItems'
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

function Navbar() {
    return (
        <nav className='navbar'>
            <Link href="/">
                <div className='flex item-center gap-2.5 cursor-pointer'>
                    <Image src="/images/logo.svg" alt='logo' width={46} height={44} />
                </div>
            </Link>
            <div className='flex items-center gap-8'>
                <NavItems />

                {/* Clerk Auth */}
                <SignedOut>
                    <SignInButton>
                        <button className='btn-signin'>
                            Sign in
                        </button>
                    </SignInButton>
                </SignedOut>

                <SignedIn>
                    <UserButton />
                </SignedIn>

            </div>
        </nav>
    )
}

export default Navbar