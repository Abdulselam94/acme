import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from './ui/fonts';
import Image from 'next/image';
import { Button } from '@/app/ui/button';

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <p className="inline-block rounded-full bg-gradient-to-r from-indigo-50 to-cyan-50 px-3 py-1 text-sm font-medium text-indigo-600">New · AI insights</p>
            <h1 className={`${lusitana.className} text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl`}>Beautiful dashboards for modern teams</h1>
            <p className="text-lg text-slate-600">A minimal, performant dashboard starter styled with modern SaaS patterns — soft shadows, rounded cards, and thoughtful spacing.</p>

            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button>Get started</Button>
              </Link>

              <Link href="#features" className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900">
                Learn more <ArrowRightIcon className="w-4" />
              </Link>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="card hover-lift fade-in">
                <h4 className="text-sm font-semibold">Realtime</h4>
                <p className="mt-2 text-sm text-slate-600">Live updates with tiny payloads.</p>
              </div>
              <div className="card hover-lift fade-in">
                <h4 className="text-sm font-semibold">Secure</h4>
                <p className="mt-2 text-sm text-slate-600">Auth, roles, and encrypted storage.</p>
              </div>
              <div className="card hover-lift fade-in">
                <h4 className="text-sm font-semibold">Extendable</h4>
                <p className="mt-2 text-sm text-slate-600">Composable components you can reuse.</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="rounded-2xl bg-gradient-to-b from-white to-slate-50 p-6 shadow-md">
                <Image
                  src="/hero-desktop.png"
                  alt="Dashboard Hero"
                  width={860}
                  height={650}
                  className="rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
