import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <div className="mx-auto grid min-h-screen w-full max-w-5xl grid-cols-1 items-center gap-8 px-6 py-12 md:grid-cols-2">
        {/* Left illustration / brand panel (desktop only) */}
        <div className="hidden flex-col items-start justify-center space-y-6 md:flex">
          <div className="rounded-3xl bg-gradient-to-br from-[#eef2ff] via-[#eefcfb] to-[#fff7ed] p-8 shadow-md hover-lift">
            <div className="w-44 text-slate-900">
              <AcmeLogo />
            </div>
          </div>

          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900">Welcome back</h2>
            <p className="text-slate-600">Sign in to access your dashboard and manage your workspace.</p>
          </div>
        </div>

        {/* Right: centered login card */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="card glass-nav fade-in hover-lift">
              <div className="px-4 py-6 md:px-8">
                <Suspense>
                  <LoginForm />
                </Suspense>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-slate-500">By continuing you agree to our terms and privacy policy.</p>
          </div>
        </div>
      </div>
    </main>
  );
}