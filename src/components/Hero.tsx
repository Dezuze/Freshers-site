import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="bg">
        <img src="/pic.webp" alt="campus" />
        <div className="overlay" />
      </div>

      <div className="content">
        <div className="left">
          <div style={{display:'inline-block',padding:'6px 10px',borderRadius:999,background:'rgba(255,255,255,0.08)',marginBottom:12,fontWeight:600}}>Welcome Freshers 2025</div>
          <h1>Shape your future at CEP Campus</h1>
          <p>Join a community of innovators — world-class faculty, modern labs, and a vibrant campus life.</p>
          <div className="cta">
            <a className="btn-primary" href="#apply">Apply Now</a>
            <a href="#schedule" style={{alignSelf:'center',padding:'10px 14px',borderRadius:10,background:'rgba(255,255,255,0.08)',color:'#fff',textDecoration:'none'}}>Bus Schedule</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

