'use client';
import { ErrorT } from '@/types/Error';
import Link from 'next/link';

export default function ErrorPage({ error }: ErrorT) {
  return (
    <div className="error">
      <h2>An error occured!</h2>
      <p>{error.message}</p>
      <Link href="/archive">Back to Archive</Link>
    </div>
  );
}
