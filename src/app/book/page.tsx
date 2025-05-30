import Navbar from '../components/Navbar';

export default function BookPage() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem', fontFamily: 'Poppins, sans-serif' }}>
        <h1 style={{ fontSize: '2rem', color: '#0c4a34' }}>🐘 Book a Safari</h1>
        <p style={{ marginBottom: '1rem' }}>
          Fill in your details and get ready for the wild adventure!
        </p>
        <form style={{ display: 'grid', gap: '1rem', maxWidth: '500px' }}>
          <input type="text" placeholder="Your Name" style={{ padding: '0.8rem' }} />
          <input type="email" placeholder="Your Email" style={{ padding: '0.8rem' }} />
          <input type="date" style={{ padding: '0.8rem' }} />
          <select style={{ padding: '0.8rem' }}>
            <option>Choose Package</option>
            <option>Family Safari</option>
            <option>School Tour</option>
            <option>VIP Safari</option>
          </select>
          <button type="submit" style={{
            padding: '1rem',
            backgroundColor: '#0c4a34',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem'
          }}>
            Book Now 🚀
          </button>
        </form>
      </main>
    </>
  );
}
