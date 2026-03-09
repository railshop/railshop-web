import { useState } from 'react';

const SERVICES = [
  'Paid Search (Google / Microsoft Ads)',
  'Paid Social (Meta, LinkedIn, TikTok)',
  'Programmatic Display',
  'Analytics & Conversion Tracking',
  'Creative Strategy',
  'Full-Funnel Strategy',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div style={styles.success}>
        <div style={styles.successIcon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h3 style={{ color: 'var(--text-2)', fontWeight: 700, marginBottom: 8 }}>Message received</h3>
        <p style={{ color: 'var(--text-3)', fontSize: 14 }}>
          Thanks for reaching out. We'll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      style={styles.form}
    >
      {/* Netlify hidden fields */}
      <input type="hidden" name="form-name" value="contact" />
      <p style={{ display: 'none' }}>
        <label>Don't fill this out: <input name="bot-field" /></label>
      </p>

      <div style={styles.row}>
        <div style={styles.field}>
          <label style={styles.label} htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            style={styles.input}
            onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--blue-border)')}
            onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
          />
        </div>
        <div style={styles.field}>
          <label style={styles.label} htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            style={styles.input}
            onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--blue-border)')}
            onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
          />
        </div>
      </div>

      <div style={styles.field}>
        <label style={styles.label} htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Acme Corp"
          style={styles.input}
          onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--blue-border)')}
          onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
        />
      </div>

      <fieldset style={styles.fieldset}>
        <legend style={{ ...styles.label, border: 'none', padding: 0 }}>
          Services you're interested in
        </legend>
        <div style={styles.checkboxGrid}>
          {SERVICES.map((svc) => (
            <label key={svc} style={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="services"
                value={svc}
                style={styles.checkbox}
              />
              <span>{svc}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div style={styles.field}>
        <label style={styles.label} htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your goals, current challenges, and anything that would help us prepare for our call..."
          style={{ ...styles.input, resize: 'vertical', minHeight: 120 }}
          onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--blue-border)')}
          onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
        />
      </div>

      <button type="submit" className="btn-primary" disabled={loading} style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'wait' : 'pointer' }}>
        {loading ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}

const styles: Record<string, React.CSSProperties> = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 16,
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  label: {
    fontSize: 12,
    fontWeight: 600,
    color: 'var(--text-3)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontFamily: 'inherit',
  },
  input: {
    background: 'var(--surface-2)',
    border: '1px solid var(--border)',
    borderRadius: 8,
    padding: '10px 14px',
    color: 'var(--text)',
    fontSize: 14,
    outline: 'none',
    transition: 'border-color 0.15s ease',
    width: '100%',
    fontFamily: 'inherit',
  },
  fieldset: {
    border: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  checkboxGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 10,
    marginTop: 8,
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 8,
    fontSize: 13,
    color: 'var(--text-3)',
    cursor: 'pointer',
  },
  checkbox: {
    marginTop: 2,
    accentColor: 'var(--blue)',
    flexShrink: 0,
  },
  success: {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: 12,
    padding: 40,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
  },
  successIcon: {
    width: 48,
    height: 48,
    background: 'rgba(52, 211, 153, 0.1)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
