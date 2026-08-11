'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { LogOut, User } from 'lucide-react'
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
    <nav className="flex h-[60px] shrink-0 items-center bg-[#F0F4F8] px-[40px]">
      <span className="font-mono text-[20px] font-bold text-[#102A43]">
        Capstone
      </span>

      {user && (
        <button
          type="button"
          onClick={handleSignOut}
          className="ml-auto flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-600"
          aria-label="Sign out"
        >
          <LogOut className="h-4 w-4" />
        </button>
      )}
    </nav>
  )
}
