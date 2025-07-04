
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/login">Logout</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}
