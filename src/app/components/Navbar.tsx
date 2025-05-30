import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#0c4a34',
      padding: '1rem 2rem',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'Poppins, sans-serif'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        🦁 Baby Safari
      </div>
      <div style={{ display: 'flex', gap: '1.5rem', fontSize: '1rem' }}>
        <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link href="/book" style={{ color: 'white', textDecoration: 'none' }}>Book</Link>
        <Link href="/packages" style={{ color: 'white', textDecoration: 'none' }}>Packages</Link>
        <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
        <Link href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
      </div>
    </nav>
  );
}
