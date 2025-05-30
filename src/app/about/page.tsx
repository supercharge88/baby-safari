import Navbar from '../components/Navbar';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem', fontFamily: 'Poppins, sans-serif' }}>
        <h1 style={{ fontSize: '2rem', color: '#0c4a34' }}>🦁 Our Story</h1>
        <p style={{ marginTop: '1rem' }}>
          Baby Safari Tours Uganda was born out of a dream to make safaris fun, safe, and magical for children and families.
          With our mascots Captain Leo and Captain Tee, we bring stories to life in the wild.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Our mission is to build a bridge between education and nature, making travel more meaningful for young explorers.
        </p>
      </main>
    </>
  );
}
