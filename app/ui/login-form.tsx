'use client';

import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { use } from 'react';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';


export default function LoginForm() {
    const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );
  return (
    <form action={formAction} className="space-y-4">
      <div>
        <h1 className={`${lusitana.className} mb-1 text-2xl font-semibold text-slate-900`}>
          Sign in to your account
        </h1>
        <p className="mb-4 text-sm text-slate-500">Enter your email and password to continue.</p>

        <div className="w-full">
          <label className="mb-2 block text-xs font-medium text-slate-700" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <input
              className="peer block w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-3 text-sm text-slate-800 placeholder:text-slate-400 transition-shadow duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400"
              id="email"
              type="email"
              name="email"
              placeholder="you@company.com"
              required
            />
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <AtSymbolIcon className="h-5 w-5" />
            </span>
          </div>

          <label className="mb-2 mt-4 block text-xs font-medium text-slate-700" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              className="peer block w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-3 text-sm text-slate-800 placeholder:text-slate-400 transition-shadow duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400"
              id="password"
              type="password"
              name="password"
              placeholder="Your password"
              required
              minLength={6}
            />
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <KeyIcon className="h-5 w-5" />
            </span>
          </div>

          <input type="hidden" name="redirectTo" value={callbackUrl} />

          <Button
            className="mt-6 w-full"
            disabled={isPending}
            aria-disabled={isPending}
            aria-busy={isPending}
          >
            {isPending ? (
              <>
                <svg className="-ml-1 mr-2 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
                Logging in…
              </>
            ) : (
              <>
                Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-white" />
              </>
            )}
          </Button>

          {errorMessage && (
            <div role="alert" className="mt-4 flex items-start gap-3 rounded-md bg-red-50/80 p-3 text-sm text-red-700">
              <ExclamationCircleIcon className="h-5 w-5 flex-shrink-0 text-red-600" />
              <div className="leading-tight">{errorMessage}</div>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
