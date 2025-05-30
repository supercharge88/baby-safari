import Navbar from '../components/Navbar';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem', fontFamily: 'Poppins, sans-serif' }}>
        <h1 style={{ fontSize: '2rem', color: '#0c4a34' }}>📞 Contact Us</h1>
        <p style={{ marginBottom: '1.5rem' }}>
          We'd love to hear from you! Whether it's a question, feedback, or booking request — feel free to reach out.
        </p>
        <div style={{ fontSize: '1.2rem', lineHeight: '2' }}>
          📧 <strong>Email:</strong> info@babysafari.ug <br />
          📱 <strong>Phone:</strong> +256 700 000 001 <br />
          📍 <strong>Location:</strong> Kampala, Uganda
        </div>
        <div style={{ marginTop: '2rem' }}>
          <h3>💌 Send Us a Message</h3>
          <form style={{ display: 'grid', gap: '1rem', maxWidth: '500px', marginTop: '1rem' }}>
            <input type="text" placeholder="Your Name" style={{ padding: '0.8rem' }} />
            <input type="email" placeholder="Your Email" style={{ padding: '0.8rem' }} />
            <textarea rows={4} placeholder="Your Message..." style={{ padding: '0.8rem' }}></textarea>
            <button type="submit" style={{
              padding: '1rem',
              backgroundColor: '#0c4a34',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem'
            }}>
              Send Message 🚀
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
