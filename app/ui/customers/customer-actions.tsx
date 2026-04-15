'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

export default function CustomerActions({ id, name, email }: { id: string; name: string; email: string }) {
  const [loading, setLoading] = useState(false);
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

  return (
    <div className="flex items-center gap-2 justify-end">
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
        onClick={handleDelete}
        disabled={loading}
        title="Delete"
        className="flex items-center gap-2 rounded-md bg-red-50 px-2 py-1 text-red-600 hover:bg-red-100 disabled:opacity-50"
      >
        <TrashIcon className="h-4 w-4" />
        <span className="hidden text-sm md:inline">Delete</span>
      </button>
    </div>
  );
}
