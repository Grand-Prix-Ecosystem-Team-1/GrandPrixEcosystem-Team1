'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'

export function Navbar() {
  const router = useRouter()
  const { user, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
    router.replace('/auth/signin')
    router.refresh()
  }

  return (
    <nav className="flex h-[64px] shrink-0 items-center bg-[#F0F4F8] px-[40px]">
      <span className="ml-[90px] font-mono text-[20px] font-bold text-[#102A43]">
        Capstone
      </span>

      {user && (
        <button
          type="button"
          onClick={handleSignOut}
          className="mr-[90px] font-space-mono ml-auto flex h-8 w-8 items-center justify-center text-[#102A43] transition-colors hover:bg-zinc-100 hover:text-[#243b53] focus:outline-none dark:hover:text-[#243b53] hover:underline"
          aria-label="Sign out"
        >
          Logout
        </button>
      )}
    </nav>
  )
}
