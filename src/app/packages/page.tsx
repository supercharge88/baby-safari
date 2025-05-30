import Navbar from '../components/Navbar';

export default function PackagesPage() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem', fontFamily: 'Poppins, sans-serif' }}>
        <h1 style={{ fontSize: '2rem', color: '#0c4a34' }}>🌿 Safari Packages</h1>
        <ul style={{ marginTop: '1rem', lineHeight: '2' }}>
          <li><strong>🐾 Family Safari:</strong> 3 days, kids activities, nature walks</li>
          <li><strong>🦓 School Tour:</strong> Educational park visits, conservation learning</li>
          <li><strong>🦒 VIP Safari:</strong> Private lodges, luxury 4x4 tours</li>
        </ul>
      </main>
    </>
  );
}
