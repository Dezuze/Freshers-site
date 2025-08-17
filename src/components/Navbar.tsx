import React, { useState } from 'react'

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">
          <img src="/logo.png" alt="logo" />
          <div>
            <div className="title">CEP Campus</div>
            <div className="muted" style={{ fontSize: 12, color: 'var(--muted)' }}>Excellence in Education</div>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#" aria-label="home">Home</a>
          <a href="#schedule" aria-label="schedule">Schedule</a>
        </nav>

        <button aria-label="menu" onClick={() => setOpen(!open)} style={{background:'transparent',border:'none',cursor:'pointer',color:'#fff'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {open && (
        <div style={{padding:'12px 20px', borderTop:'1px solid rgba(255,255,255,0.06)', background:'rgba(2,6,23,0.96)'}}> 
          <a href="#" style={{display:'block',padding:'8px 0',color:'#fff'}}>Home</a>
          <a href="#schedule" style={{display:'block',padding:'8px 0',color:'#fff'}}>Schedule</a>
        </div>
      )}
    </header>
  )
}

export default Navbar
