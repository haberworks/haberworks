'use client'

import Link from 'next/link'
import { Metadata } from 'next'
import './Contact.css'

// Metadata for Contact Page
export const metadata: Metadata = {
  title: "Is it Even Possible to Contact Justin Haber?",
  description: "Holla at ya boy."
}

export default function ContactPage() {
  return (
    <main className="contact-page">
      {/* Page Heading */}
      <h1 className="contact-heading">Let&apos;s Chat</h1>

      {/* Breadcrumbs */}
      <nav className="breadcrumb">
        <Link href="/" className="breadcrumb-link">
          ← Back to 🍞
        </Link>
      </nav>

      {/* Contact Card */}
      <div className="contact-card">
        <div className="contact-info">
          <p className="contact-name">Justin Haber</p>
          <p className="contact-role">A Guy Worth Contacting</p>
          <p className="contact-description">Via These Methods:</p>
        </div>

        <div className="contact-links">
          <a
            href="mailto:haberworks@gmail.com"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            📧 Email
          </a>
          <a
            href="https://www.linkedin.com/in/jus-tin-ha-ber/"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://gibby.games/"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            🎲 Gibby Games
          </a>
        </div>
      </div>
    </main>
  )
}
