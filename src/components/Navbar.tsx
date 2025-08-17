import React, { useState } from 'react'

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">
          <img src="/logo.png" alt="logo" />
          <div className="brand-meta">
            <div className="title">CEP Campus</div>
            <div className="muted" style={{ fontSize: 12, color: 'var(--muted)' }}>Excellence in Education</div>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#" aria-label="home">Home</a>
          <a href="#schedule" aria-label="schedule">Schedule</a>
        </nav>

        <button className="nav-toggle" aria-label="menu" onClick={() => setOpen(!open)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {open && (
        <div className="nav-mobile"> 
          <a href="#" className="nav-mobile-link">Home</a>
          <a href="#schedule" className="nav-mobile-link">Schedule</a>
        </div>
      )}
    </header>
  )
}

export default Navbar
