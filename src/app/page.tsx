import Navbar from './components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem', fontFamily: 'Poppins, sans-serif' }}>
        {/* Hero Section */}
        <h1 style={{ fontSize: '2.5rem', color: '#0c4a34' }}>
          🦁 Welcome to Baby Safari Tours Uganda!
        </h1>
        <p style={{ marginTop: '1rem', fontSize: '1.2rem' }}>
          Explore the wild heart of Uganda through unforgettable safaris designed for kids, families, and schools.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <button style={{ padding: '1rem', background: '#ec4899', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem' }}>
            Book a Safari 🐘
          </button>
        </div>

        {/* Safari Packages */}
        <section style={{ marginTop: '4rem' }}>
          <h2 style={{ fontSize: '2rem', color: '#0c4a34' }}>🌿 Our Safari Packages</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginTop: '1.5rem'
          }}>
            <div style={{ background: '#fef3c7', padding: '1rem', borderRadius: '1rem' }}>
              <h3>🐾 Family Safari</h3>
              <p>Fun-packed 3-day trip with child-friendly activities and nature walks.</p>
            </div>
            <div style={{ background: '#e0f2fe', padding: '1rem', borderRadius: '1rem' }}>
              <h3>🦓 School Tour</h3>
              <p>Educational journeys through parks with storytelling and conservation tips.</p>
            </div>
            <div style={{ background: '#ede9fe', padding: '1rem', borderRadius: '1rem' }}>
              <h3>🦒 VIP Safari</h3>
              <p>Luxury lodges, guided treks, and private encounters with Uganda's wildlife.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section style={{ marginTop: '4rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', color: '#0c4a34' }}>🌟 Why Choose Baby Safari?</h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '2rem'
          }}>
            <div style={{ width: '250px', background: '#d1fae5', padding: '1.5rem', borderRadius: '1rem' }}>
              <div style={{ fontSize: '2rem' }}>👨‍👩‍👧‍👦</div>
              <h4>Family Friendly</h4>
              <p>Trips designed with kids and families in mind — safe, fun, and enriching.</p>
            </div>
            <div style={{ width: '250px', background: '#fee2e2', padding: '1.5rem', borderRadius: '1rem' }}>
              <div style={{ fontSize: '2rem' }}>📚</div>
              <h4>Educational</h4>
              <p>Learn about wildlife, history, and culture while enjoying the safari.</p>
            </div>
            <div style={{ width: '250px', background: '#ede9fe', padding: '1.5rem', borderRadius: '1rem' }}>
              <div style={{ fontSize: '2rem' }}>🛡️</div>
              <h4>Safe & Guided</h4>
              <p>Trained captains and smooth trips mean peace of mind every step.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section style={{
          marginTop: '4rem',
          backgroundColor: '#fce7f3',
          padding: '3rem 2rem',
          borderRadius: '1rem',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '2rem', color: '#0c4a34' }}>📞 Get in Touch</h2>
          <p style={{ fontSize: '1.1rem', marginTop: '1rem' }}>
            Ready to book or have questions? We’d love to hear from you.
          </p>
          <div style={{ marginTop: '1.5rem', fontSize: '1.2rem', color: '#1e293b' }}>
            📧 <strong>Email:</strong> info@babysafari.ug<br />
            📱 <strong>Phone:</strong> +256 700 000 001
          </div>
          <button style={{
            marginTop: '2rem',
            padding: '1rem 2rem',
            backgroundColor: '#ec4899',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            fontSize: '1rem',
            cursor: 'pointer'
          }}>
            Contact Us Now 💌
          </button>
        </section>

        {/* Footer */}
        <footer style={{
          marginTop: '4rem',
          padding: '2rem',
          textAlign: 'center',
          borderTop: '1px solid #ccc',
          color: '#555'
        }}>
          <p>© {new Date().getFullYear()} Baby Safari Tours Uganda. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem' }}>
            Follow us:
            <a href="#" style={{ marginLeft: '0.5rem', color: '#3b82f6' }}>Facebook</a> ·
            <a href="#" style={{ marginLeft: '0.5rem', color: '#06b6d4' }}>Instagram</a>
          </p>
        </footer>
      </main>
    </>
  );
}
