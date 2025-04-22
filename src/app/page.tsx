'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'import { useEffect, useState } from 'react'
import './Home.css'

const navItems = [
  { label: 'About', href: '/about', internal: true, offsetX: -65 },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jus-tin-ha-ber/', internal: false, offsetX: -39 },
  { label: 'SoundCloud', href: 'https://soundcloud.com/haberworks', internal: false, offsetX: -13 },
  { label: 'GitHub', href: 'https://github.com/haberworks', internal: false, offsetX: 13 },
  { label: 'Photo Gallery', href: '/gallery', internal: true, offsetX: 39 },
  { label: 'Contact', href: '/contact', internal: true, offsetX: 65 },
]

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleClick = (index: number, href: string, internal: boolean) => {
    if (!isMobile) return
    if (activeIndex === index) {
      if (internal) window.location.href = href
      else window.open(href, '_blank')
    } else {
      setActiveIndex(index)
    }
  }

  return (
    <main className="main">
      <header className="header">
        <h1 className="headline">What&apos;s Cookin&apos;</h1>
      </header>

      <div className="loaf">
        {[...navItems].reverse().map((item, index) => {
          const isHovered = (!isMobile && hoveredIndex === index) || (isMobile && activeIndex === index)

          const Wrapper = item.internal ? Link : 'a'
          const wrapperProps = item.internal
            ? { href: item.href }
            : { href: item.href, target: '_blank', rel: 'noopener noreferrer' }

          return (
            <Wrapper
              key={index}
              {...wrapperProps}
              className="slice-container"
              style={{ transform: `translateX(${item.offsetX}px)`, zIndex: index + 1 }}
              onMouseEnter={() => !isMobile && setHoveredIndex(index)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
              onClick={(e) => {
                if (!isMobile) return
                e.preventDefault()
                handleClick(index, item.href, item.internal)
              }}
            >
              <div className={`slice ${isHovered ? 'hovered' : ''}`}>
                {isHovered && (
                  <svg className="slice-label-arc" viewBox="0 0 240 20" width="240" height="20">
                    <defs>
                      <path id={`label-arc-${index}`} d="M 20 40 Q 120 -5 220 40" />
                    </defs>
                    <text textAnchor="middle" fill="black" fontFamily="'Rye', cursive" fontSize="18">
                      <textPath xlinkHref={`#label-arc-${index}`} startOffset="50%">
                        {item.label}
                      </textPath>
                    </text>
                  </svg>
                )}
                <Image
                  src="/Slice.png"
                  alt={item.label}
                  width={240}
                  height={240}
                  className="slice-image"
                />
              </div>
            </Wrapper>
          )
        })}
      </div>

      <section className="footer-container">
        <footer className="footer">
          &copy; {new Date().getFullYear()} HaberWorks
        </footer>
      </section>
    </main>
  )
}
