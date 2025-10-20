import React from 'react';

export default function Footer(){
  return (
    <footer className="section" style={{background:'#fff'}}>
      <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:12}}>
        <div style={{display:'flex', gap:10, alignItems:'center'}}>
          <div style={{width:44, height:44, background:'linear-gradient(90deg,var(--primary), var(--accent))', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:700}}>PT</div>
          <div>
            <div style={{fontWeight:700}}>ProjTrust</div>
            <div style={{fontSize:12, color:'var(--muted)'}}>Trust the Process. See the Progress.</div>
          </div>
        </div>

        <div style={{textAlign:'right', color:'var(--muted)', fontSize:14}}>
          <div>© {new Date().getFullYear()} ProjTrust. All rights reserved.</div>
          <div style={{marginTop:6}}>
            <a href="#" style={{marginRight:10}}>Privacy</a>
            <a href="#" style={{marginRight:10}}>Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
