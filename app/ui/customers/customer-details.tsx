'use client';

import { useState } from 'react';
import Avatar from './avatar';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function CustomerDetails({ customer, open, onClose }: any) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-stretch justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative z-50 m-6 w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-2xl transition">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <Avatar name={customer.name} src={customer.image_url} size={64} />
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{customer.name}</h3>
              <p className="text-sm text-slate-500">{customer.email}</p>
            </div>
          </div>
          <button onClick={onClose} className="rounded-md p-1 text-slate-600 hover:bg-slate-100">
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <p className="text-sm text-slate-600">Statistics</p>
            <div className="flex items-center gap-6">
              <div>
                <p className="text-xs text-slate-400">Invoices</p>
                <p className="text-sm font-medium">{customer.total_invoices ?? 0}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Pending</p>
                <p className="text-sm font-medium">{customer.total_pending ?? '—'}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Paid</p>
                <p className="text-sm font-medium">{customer.total_paid ?? '—'}</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-slate-600">Contact</p>
            <div className="rounded-md bg-slate-50 p-3 text-sm text-slate-700">{customer.email}</div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button onClick={onClose} className="rounded-md bg-slate-100 px-4 py-2 text-sm">Close</button>
        </div>
      </div>
    </div>
  );
}
