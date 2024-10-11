import React from 'react'
import Link from 'next/link';
import './nav.css';

function Nav() {
  return (
    <header className="bg-gray-800 -mx-20 px-20 py-4">
    <nav >
      <ul className="flex space-x-4 justify-end">
        <li><Link href="/" className="nav-link">Home</Link></li>
        <li><Link href="/about" className="nav-link">About</Link></li>
        <li><Link href="/contact" className="nav-link">Contact</Link></li>
        <li><Link href="/my-ip" className="nav-link">My IP</Link></li>
      </ul>
    </nav>
  </header>
  )
}

export default Nav