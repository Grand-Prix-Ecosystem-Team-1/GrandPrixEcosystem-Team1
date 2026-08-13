'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { useAuth } from '@/hooks/useAuth'
import { loginSchema, type LoginInput } from '@/lib/validations/auth'
import { FullPageSpinner } from '@/components/shared/LoadingSpinner'

export default function SignInPage() {
  const router = useRouter()
  const { user, loading, signInWithEmail, signInWithGoogle } = useAuth()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  })

  useEffect(() => {
    if (!loading && user) {
      router.replace('/team')
    }
  }, [loading, user, router])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('verification') === 'sent') {
      toast.success('Verification email sent. Verify your email, then sign in.')
    }
  }, [])

  if (loading) return <FullPageSpinner />

  const onSubmit = async (data: LoginInput) => {
    try {
      await signInWithEmail(data.email, data.password)
      toast.success('Signed in successfully')
      router.replace('/team')
      router.refresh()
    } catch (error: unknown) {
      if (error instanceof Error && error.message.includes('email-not-verified')) {
        toast.error('Please verify your email before signing in.')
      } else {
        setError('root', { message: 'Sign in error, incorrect username or password' })
      }
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()
      router.replace('/dashboard')
    } catch {
      toast.error('Google sign-in failed. Please try again.')
    }
  }

  return (
    <div className="rounded-[12px] border border-[#627d98] bg-white px-[27px] py-[30px]">
        
      <div className="text-center">
            <h1 className="font-space-mono text-[32px] text-[#102A43] font-bold tracking-[1px]">
              Welcome Back
            </h1>

            <p className="mt-[25px] text-[14px] font-inter text-[#627d98]">
              Sign in to access your team
            </p>
          </div>


      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="mt-4 flex w-full items-center justify-center gap-3 rounded-[8px] border border-[#D9E2EC] bg-white px-4 py-2.5 text-sm text-black font-medium transition-colors hover:bg-zinc-50 dark:border-[#D9E2EC]"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" font-inter aria-hidden="true">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        Sign in with Google
      </button>

      <div className="mt-4 relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-[#D9E2EC] dark:border-[#D9E2EC]" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="text-space-mono bg-white px-2 text-zinc-900">or</span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
        <div className="space-y-1.5">
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-label="Email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className="font-inter text-black w-full h-[44px] rounded-[8px] border border-[#D9E2EC] bg-white px-3 py-2 text-sm placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-500 focus:outline-none aria-invalid:border-red-500 dark:border-[#D9E2EC] dark:bg-white"
            placeholder="Email"
            {...register('email')}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-[#D64545]" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
          </div>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            aria-label="Password"
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? 'password-error' : undefined}
            className="font-inter text-black w-full h-[44px] rounded-[8px] border border-[#D9E2EC] bg-white px-3 py-2 text-sm placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-500 focus:outline-none aria-invalid:border-red-500 dark:border-[#D9E2EC] dark:bg-white"
            placeholder="Password"
            {...register('password')}
          />
          {errors.password && (
            <p id="password-error" className="text-xs text-[#D64545]" role="alert">
              {errors.password.message}
            </p>
          )}
        </div>
    
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 h-[44px] w-full rounded-[8px] bg-[#102a43] text-[13px] font-semibold text-white transition-colors hover:bg-[#243B53] disabled:cursor-not-allowed disabled:opacity-50" >
          {isSubmitting ? 'Signing in…' : 'Sign in'}
        </button>
        {errors.root && (
            <p id="root-error" className="text-center text-xs text-[#D64545]" role="alert">
                {errors.root.message}
            </p>
            )}
      </form>

      <p className="mt-4 text-center text-sm text-zinc-500">
        Don&apos;t have an account?{' '}
        <Link
          href="/auth/signup"
          className="font-medium text-zinc-900 hover:underline dark:text-zinc-900"
        >
          Create one
        </Link>
      </p>
    </div>
  )
}
