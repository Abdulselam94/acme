'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TrashIcon, PencilSquareIcon, EyeIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import CustomerDetails from './customer-details';

export default function CustomerActions({ id, name, email, ...rest }: any) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  async function handleDelete() {
    if (!confirm('Delete this customer? This cannot be undone.')) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/customers?id=${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Delete failed');
      router.refresh();
    } catch (err) {
      console.error(err);
      alert((err as Error).message || 'Failed to delete customer');
    } finally {
      setLoading(false);
    }
  }

  async function handleEdit() {
    const newName = prompt('Edit name', name);
    if (newName === null) return;
    const newEmail = prompt('Edit email', email);
    if (newEmail === null) return;

    setLoading(true);
    try {
      const res = await fetch('/api/customers', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, name: newName, email: newEmail, image_url: '/customers/default.png' }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Update failed');
      router.refresh();
    } catch (err) {
      console.error(err);
      alert((err as Error).message || 'Failed to update customer');
    } finally {
      setLoading(false);
    }
  }

  function handleInvoice() {
    router.push(`/dashboard/invoices/create?customerId=${id}`);
  }

  return (
    <div className="flex items-center gap-2 justify-end">
      <button
        onClick={() => setOpen(true)}
        title="View"
        className="flex items-center gap-2 rounded-md bg-slate-50 px-2 py-1 text-slate-700 hover:bg-slate-100"
      >
        <EyeIcon className="h-4 w-4" />
        <span className="hidden text-sm md:inline">View</span>
      </button>

      <button
        onClick={handleEdit}
        disabled={loading}
        title="Edit"
        className="flex items-center gap-2 rounded-md bg-indigo-50 px-2 py-1 text-indigo-600 hover:bg-indigo-100 disabled:opacity-50"
      >
        <PencilSquareIcon className="h-4 w-4" />
        <span className="hidden text-sm md:inline">Edit</span>
      </button>

      <button
        onClick={handleInvoice}
        title="Invoice"
        className="flex items-center gap-2 rounded-md bg-emerald-50 px-2 py-1 text-emerald-600 hover:bg-emerald-100"
      >
        <DocumentTextIcon className="h-4 w-4" />
        <span className="hidden text-sm md:inline">Invoice</span>
      </button>

      <button
        onClick={handleDelete}
        disabled={loading}
        title="Delete"
        className="flex items-center gap-2 rounded-md bg-red-50 px-2 py-1 text-red-600 hover:bg-red-100 disabled:opacity-50"
      >
        <TrashIcon className="h-4 w-4" />
        <span className="hidden text-sm md:inline">Delete</span>
      </button>

      <CustomerDetails customer={{ id, name, email, ...rest }} open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
