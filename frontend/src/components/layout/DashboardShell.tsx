import type { ReactNode } from 'react'

export function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex overflow-hidden bg-zinc-50 dark:bg-zinc-950">
      <div className="flex flex-1 flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}
