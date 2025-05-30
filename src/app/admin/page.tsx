import Navbar from '../components/Navbar';

export default function AdminPage() {
  return (
    <>
      <Navbar />
      <main style={{
        padding: '2rem',
        fontFamily: 'Poppins, sans-serif',
        backgroundColor: '#f0fdf4',
        minHeight: '80vh'
      }}>
        <h1 style={{ fontSize: '2rem', color: '#0c4a34' }}>🔐 Admin Dashboard</h1>
        <p style={{ marginTop: '1rem' }}>
          Welcome to the admin panel. From here, you will manage trips, review bookings, and control system operations.
        </p>
        <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#64748b' }}>
          (This is a placeholder — full dashboard functionality coming soon!)
        </p>
      </main>
    </>
  );
}
