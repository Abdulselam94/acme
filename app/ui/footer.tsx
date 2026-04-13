import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-transparent py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <h4 className="text-lg font-semibold">Acme</h4>
            <p className="mt-2 text-sm text-slate-600">Modern dashboard UI example — built with Next.js.</p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div>
              <h5 className="text-sm font-medium">Product</h5>
              <ul className="mt-3 text-sm text-slate-600 space-y-2">
                <li><Link href="#">Features</Link></li>
                <li><Link href="#">Pricing</Link></li>
                <li><Link href="#">Docs</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-medium">Company</h5>
              <ul className="mt-3 text-sm text-slate-600 space-y-2">
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Careers</Link></li>
                <li><Link href="#">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-medium">Support</h5>
              <ul className="mt-3 text-sm text-slate-600 space-y-2">
                <li><Link href="#">Help center</Link></li>
                <li><Link href="#">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-medium">Legal</h5>
              <ul className="mt-3 text-sm text-slate-600 space-y-2">
                <li><Link href="#">Terms</Link></li>
                <li><Link href="#">Privacy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Acme. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
