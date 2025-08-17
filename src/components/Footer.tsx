import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="inner">
        <div>
          <strong>CEP Campus</strong>
          <div style={{color:'var(--muted)',fontSize:13}}>Excellence in Education</div>
        </div>
        <div style={{color:'var(--muted)'}}>
          © {new Date().getFullYear()} CEP Campus. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
