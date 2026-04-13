import Link from 'next/link';
import AcmeLogo from '@/app/ui/acme-logo';
import { Button } from './button';

export default function Navbar() {
  return (
    <header className="sticky top-4 z-50 mx-4">
      <div className="glass-nav mx-auto max-w-7xl rounded-2xl">
        <div className="flex items-center justify-between gap-6 px-6 py-3">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <AcmeLogo />
              <span className="hidden text-sm font-semibold sm:inline">Acme</span>
            </Link>
          </div>

          <nav className="hidden items-center gap-6 sm:flex">
            <Link href="#features" className="text-sm text-slate-700 hover:text-slate-900 transition">Features</Link>
            <Link href="#customers" className="text-sm text-slate-700 hover:text-slate-900 transition">Customers</Link>
            <Link href="#pricing" className="text-sm text-slate-700 hover:text-slate-900 transition">Pricing</Link>
            <Link href="#docs" className="text-sm text-slate-700 hover:text-slate-900 transition">Docs</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login" aria-label="Log in">
              <Button className="hidden sm:inline-flex">Log in</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
