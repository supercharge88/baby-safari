import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#0c4a34' }}>
        🦁 Welcome to Baby Safari Tours Uganda!
      </h1>
      <p style={{ marginTop: '1rem', fontSize: '1.2rem' }}>
        Explore the wild heart of Uganda through unforgettable safaris designed for kids, families, and schools. Travel with purpose. Experience with joy.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <Link href="/book">
          <button
            style={{
              padding: '1rem',
              background: '#ec4899',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Book a Safari 🐘
          </button>
        </Link>
      </div>
    </main>
  );
}