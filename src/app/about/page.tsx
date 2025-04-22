'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import './About.css'

// Metadata for About Page
export const metadata: Metadata = {
  title: "About Justin Haber aka HaberWorks",
  description: "What is the deal with this guy?"
}

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* Page Heading */}
      <h1 className="about-heading">About</h1>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link href="/" className="breadcrumb-link">
          ← Back to 🍞
        </Link>
      </nav>

      {/* About Content */}
      <div className="about-container">
        <div className="about-content">
          <p className="about-paragraph">
            Hey, Justin here. Welcome to my lil vibe-coded website. Just messin&apos; around with a prototyping process. At work, I do product management.
            Outside of work, maybe the same thing? I&apos;ve spent over a decade in tech, working
            with some awesome people on some interesting projects, and formed lifelong friendships in the process, forged in the fires of start-ups and top-downs. 
          </p>
          <p className="about-paragraph">
            Outside of work, I&apos;m an avid tinkerer and thinkerer. See, here I&apos;m messing around with stuff I may not fully understand. But that is life. 
            Stuff I may know a bit more about includes my loving family and friends, my incredible fiancée Ashlynn (a real developer who rightfully judges my hack-work) and our cat Butters (who just wants to eat), my extensive collection of bass guitars that I <a href="https://www.instagram.com/jhawkins.nightshift/" target="_blank">still play sometimes</a>,
            my Steam library which continues to increase in size and dust accumulation, baseball (Let&apos;s Go Mets!), <a href="https://boz-float.itch.io/" target="_blank">making music for indie games</a>, <a href="https://gibby.games/" target="_blank">marketing for homegrown board games</a>, and making tasty creations for the people I love in my kitchen. I&apos;m pretty domesticated but don&apos;t often feel like it. 
            Maybe I feel right at home in that state of in-between. 
          </p>
        </div>
        
        {/* Headshot Image */}
        <div className="about-image">
          <Image
            src="/me.jpg"
            alt="Headshot of Justin Haber"
            width={200}
            height={200}
            className="headshot"
          />
        </div>
      </div>
    </main>
  )
}
