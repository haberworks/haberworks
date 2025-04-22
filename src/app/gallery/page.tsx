'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import './Gallery.css'

const images = [
  {
    src: '/gallery/venice.jpg',
    alt: 'Venice, 2015',
    caption: 'Checking out the canals',
  },
  {
    src: '/gallery/pontevecchio.jpg',
    alt: 'Ponte Vecchio',
    caption: 'View of Ponte Vecchio from Uffizi',
  },
  {
    src: '/gallery/grandtetons.jpg',
    alt: 'Grand Tetons',
    caption: 'Resting between hikes',
  },
  {
    src: '/gallery/yellowstonerivers.jpg',
    alt: 'Yellowstone Rivers',
    caption: 'Pretty cool convergence',
  },
  {
    src: '/gallery/yellowstonefield.jpg',
    alt: 'Driving through Yellowstone',
    caption: 'Nice scene while driving through Yellowstone',
  },
  {
    src: '/gallery/keywest.jpg',
    alt: 'View from the west end of Key West',
    caption: 'Sailing off the end of Key West',
  },
  {
    src: '/gallery/sombreroreef.jpg',
    alt: 'Sombrero Reef',
    caption: 'Sombrero Reef, the best snorkeling in the States',
  },
  {
    src: '/gallery/sevenmilebridge.jpg',
    alt: 'Seven Mile Bridge Sunset',
    caption: 'Sunset over the Seven Mile Bridge, RIP Hawksnest',
  },
]

// Metadata for Gallery Page
export const metadata: Metadata = {
  title: "Some of My Photos",
  description: "Just some pictures I took, I should maybe could possibly add more eventually perhaps."
}

export default function GalleryPage() {
  const [activeImage, setActiveImage] = useState<number | null>(null)

  return (
    <main className="gallery-page">
      {/* Page Heading */}
      <h1 className="gallery-heading">Glimpses</h1>

      {/* Breadcrumbs */}
      <nav className="breadcrumb">
        <Link href="/" className="breadcrumb-link">
          ← Back to 🍞
        </Link>
      </nav>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-card" onClick={() => setActiveImage(index)}>
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={300}
              className="gallery-img"
            />
            <div className="caption">{img.caption}</div>
          </div>
        ))}
      </div>

      {/* Modal for image preview */}
      {activeImage !== null && (
        <div className="modal" onClick={() => setActiveImage(null)}>
          <div className="modal-content">
            <Image
              src={images[activeImage].src}
              alt={images[activeImage].alt}
              width={1200}
              height={800}
              className="modal-img"
            />
            <p className="modal-caption">{images[activeImage].caption}</p>
          </div>
        </div>
      )}
    </main>
  )
}
