'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import React from 'react';

export default function Pagination({ currentPage, totalPages }: { currentPage: number; totalPages: number }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function goto(page: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(page));
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="mt-6 flex items-center justify-center gap-2">
      <button
        onClick={() => goto(Math.max(1, currentPage - 1))}
        disabled={currentPage <= 1}
        className="rounded-md px-3 py-1 text-sm bg-white border disabled:opacity-50"
      >
        Prev
      </button>
      <div className="text-sm text-slate-600">Page {currentPage} of {totalPages}</div>
      <button
        onClick={() => goto(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage >= totalPages}
        className="rounded-md px-3 py-1 text-sm bg-white border disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
