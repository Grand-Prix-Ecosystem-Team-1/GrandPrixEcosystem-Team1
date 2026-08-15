import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-[#F0F4F8] dark:bg-[#F0F4F8] px-4">
      <div className="w-full max-w-sm">{children}</div>
    </div>
  )
}
