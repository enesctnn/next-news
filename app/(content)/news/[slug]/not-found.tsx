import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="error">
      <h2>Not Found!</h2>
      <p>Could not find requested article!</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
