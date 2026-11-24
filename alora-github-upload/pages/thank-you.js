export default function ThankYou() {
  return (
    <main style={{ background: '#000', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '640px', width: '100%', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1rem', color: '#D4AF37' }}>Payment received — thank you.</h1>
        <p style={{ fontWeight: 300, lineHeight: 1.6 }}>
          Your AI Intelligence Blueprint is confirmed. The Alora Infinite team will follow up with your
          Blueprint and next steps at the email you used at checkout.
        </p>
        <p style={{ marginTop: '1.5rem' }}>
          <a href="/" style={{ color: '#D4AF37' }}>Back to Alora Infinite</a>
        </p>
      </div>
    </main>
  );
}
