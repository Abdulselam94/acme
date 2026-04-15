'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateCustomer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, image_url: '/customers/default.png' }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Create failed');

      setName('');
      setEmail('');
      router.refresh();
    } catch (err) {
      console.error(err);
      setError((err as Error).message || 'Failed to create customer');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex w-full gap-2">
      <input
        required
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-1/2 rounded-md border border-slate-200 px-3 py-2 text-sm"
      />
      <input
        required
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-1/2 rounded-md border border-slate-200 px-3 py-2 text-sm"
      />
      <button
        type="submit"
        disabled={loading}
        className="ml-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
      >
        {loading ? 'Creating…' : 'Create'}
      </button>
      {error && <div className="mt-2 text-sm text-red-600">{error}</div>}
    </form>
  );
}
